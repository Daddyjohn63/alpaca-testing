"use client";
import { addPost } from "@/actions/add-post";
import { useState, useEffect, useTransition, ChangeEvent } from "react";
import { ImageIcon } from "@radix-ui/react-icons";
import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddPostSchema, BlogContentSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { TiptapEditor } from "@/components/admin/tiptap-editor";
import {kebabCase} from "change-case";
import { type Category, type Post } from "@prisma/client";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type AddPostFormProps = {
  categories: Category[]
  postData?: Post 
}

type AddPostPayload = {
  postId: string;
  title: string;
  slug: string;
  status: string;
  category: string;
  content: string,
  imagePath: string | undefined,
}

function getImageData(event: ChangeEvent<HTMLInputElement>) {

  //FileList is immutable, so we need to create a new one
  const dataTransfer = new DataTransfer();

  // Add newly updaloded images
  Array.from(event.target.files!).forEach((image) => 
      dataTransfer.items.add(image as File)
  );

  const files = dataTransfer.files[0];
  const displayUrl = URL.createObjectURL(event.target.files![0])

  return {files, displayUrl };
};

export const AddPostForm = (props: AddPostFormProps) => {
  const {categories, postData} = props

  const { update } = useSession();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [formContent, setFormContent] = useState<string | undefined>(postData?.content);
  const [slugValue, setSlugValue] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | undefined>(`${process.env.NEXT_PUBLIC_BLOG_POST_IMAGE_PATH}/${postData?.imagePath}`);
  const [formContentError, setFormContentError] = useState<boolean>(false);

  const form = useForm<z.infer<typeof AddPostSchema>>({
    resolver: zodResolver(AddPostSchema),
    defaultValues: {
      title: postData ? postData.title : '',
      slug: postData ? postData.slug : '',
      status: postData ? postData.status : '',
      category: postData ? postData.categoryId : '',
    },
  });

  //Watch title input to create url friendly slug
  const watchTitle = form.watch("title");

  useEffect(() => {

    // Converts title to kebab case, a url friendly slug
    const urlFriendlySlug = kebabCase(watchTitle)

    // Changes it visually on input field
    form.setValue("slug", urlFriendlySlug)

    //Sets slug in state for onSubmit
    setSlugValue(urlFriendlySlug)

  }, [watchTitle]);


  const onSubmit = (values: z.infer<typeof AddPostSchema>) => {

    setError(undefined);
    setSuccess(undefined);

     // Validate the editor content
    if(!formContent) {
      setFormContentError(true);
      return
    }
    const contentValidationResults = BlogContentSchema.safeParse({ content: formContent });

    setFormContentError(false);
    if (!contentValidationResults.success) {
      setFormContentError(true);
      setError("Post unable to submit, form content is required")
      return
    } 

    let imageFilename: string | undefined;

    startTransition(async () => {

      //Send post image to cloud storage if uploaded.
      if(values.image) {

        const fileData = new FormData()
        fileData.set('file', values.image)

        const res = await fetch('/api/upload-post-image', {
          method: 'POST',
          body: fileData
        })
      
        if(!res.ok) {
          setError("Something went wrong, image did not upload.")
          return
        }
        const data = await res.json()
        imageFilename = await data.uuidFilename

      }

      //Craft payload data for database
      const payload: AddPostPayload = {
        postId: '',
        title: values.title,
        slug: slugValue,
        status: values.status,
        category: values.category,
        content: formContent,
        imagePath: imageFilename,
      }

      //If post id exists then add to payload. 
      if(postData && postData.id) {
        payload.postId = postData.id
      }

      //Add payload data to action to create in database
       addPost(payload)
         .then((data) => {
           if (data.error) {
             setError(data.error);
           }
      
           if (data.success) {
             update();
             setSuccess(data.success);

            //If there are duplicate posts, slug will finalize with incremental number at the end. 
             if(data.data.slug) {
               const updatedSlug = data.data.slug
               form.setValue("slug", updatedSlug)
             }
           }
         })
         .catch(() => setError("Could not add to post databse, something went wrong!"));
    });

  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col-reverse md:flex-row gap-8 max-w-5xl">
          <div className="lg:w-full">
            <Card className="p-5" >
              <div className="mb-5">
              <FormError message={error} />
              <FormSuccess message={success} />
              </div>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Top 10 way to be awesome!"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL Slug</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="top-10-ways-to-be-awesome"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <TiptapEditor formContent={formContent} setFormContent={setFormContent} />
                  {!!formContentError && 
                    <p className="text-[0.8rem] font-medium text-destructive">Form content is required</p>
                  }
                </FormItem>
              </div>
            </Card>
          </div>
          <div className="md:w-[350px] space-y-5">
            <Button disabled={isPending} type="submit" className="w-full py-7">
              Submit Post
            </Button>
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full border border-border bg-muted">
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent >
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />

                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full border border-border bg-muted">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {!!categories && categories.map((category, i) => (
                          <SelectItem key={i} value={category.id}>{category.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
          control={form.control}
          name="image"
          render={({ field: { onChange, value, ...rest} }) => (
            <FormItem>
              <FormLabel>Post Image</FormLabel>
                  {!!imagePreview ? (
                    <div className="bg-muted flex justify-center items-center p-3 rounded-md border border-border">
                      <img src={imagePreview} className="rounded-sm" />
                    </div>
                  ) : (
                  <div className="bg-muted flex justify-center aspect-video items-center p-3 rounded-md border border-border">
                        <ImageIcon className="w-10 h-10 text-muted-foreground/70"/>
                  </div>

                  )}
              <FormControl>
                <Input 
                    id="picture"
                    type="file"
                    className="file:bg-muted-foreground file:rounded-sm file:mr-4 bg-muted border-border text-foreground pt-[6px]"
                    {...rest}
                    onChange={(event) => {
                      if(!event.target.files || event.target.files.length <= 0) {
                        return
                      }
                      const {files, displayUrl} = getImageData(event)
                      setImagePreview(displayUrl);
                      onChange(files)
                    }}
                    />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
        </div>
      </form>
    </Form>
  );
};
