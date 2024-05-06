"use client";
import { Textarea } from "@/components/ui/textarea"
import { addPost } from "@/actions/add-post";
import { useState, useEffect, useTransition, ChangeEvent } from "react";
import { ImageIcon } from "@radix-ui/react-icons";
import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddCategorySchema} from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { TiptapEditor } from "@/components/admin/tiptap-editor";
import {kebabCase} from "change-case";
import { type Category } from "@prisma/client";
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
import { Edit } from "lucide-react";

type AddCategoryFormProps = {
  categoryData?: Category 
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

export const AddCategoryForm = (props: AddCategoryFormProps) => {
  const {categoryData} = props

  //If postData exists and postData.id is not undefined, then its an edit post page. 

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [editSlug, setEditSlug] = useState<boolean>(true)

  const form = useForm<z.infer<typeof AddCategorySchema>>({
    resolver: zodResolver(AddCategorySchema),
    defaultValues: {
    },
  });

  const onSubmit = (values: z.infer<typeof AddCategorySchema>) => {
  //
  //   setError(undefined);
  //   setSuccess(undefined);
  //
  //   let imageFilename: string | undefined;
  //
  //   startTransition(async () => {
  //
  //     //Send post image to cloud storage if uploaded.
  //     if(values.image) {
  //
  //       const fileData = new FormData()
  //       fileData.set('file', values.image)
  //
  //       const res = await fetch('/api/upload-post-image', {
  //         method: 'POST',
  //         body: fileData
  //       })
  //
  //       if(!res.ok) {
  //         setError("Something went wrong, image did not upload.")
  //         return
  //       }
  //       const data = await res.json()
  //       imageFilename = await data.uuidFilename
  //
  //     }
  //
  //
  //     //Craft payload data for database
  //     const payload: AddPostPayload = {
  //       postId: postData ? postData.id : '',
  //       title: values.title,
  //       slug: values.slug,
  //       status: values.status,
  //       category: values.category,
  //       content: values.content,
  //       imagePath: imageFilename,
  //     }
  //
  //     //Add payload data to action to create in database
  //      addPost(payload)
  //        .then((data) => {
  //          if (data.error) {
  //            setError(data.error);
  //          }
  //     
  //          if (data.success) {
  //            update();
  //            setSuccess(data.success);
  //
  //           //If there are duplicate posts, slug will finalize with incremental number at the end. 
  //            if(data.data.slug) {
  //              const updatedSlug = data.data.slug
  //              form.setValue("slug", updatedSlug)
  //            }
  //          }
  //        })
  //        .catch((data) => {
  //         setError(data.error)
  //       });
  //   });

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
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Business"
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
                        <div className="flex gap-2 justify-center items-center">
                          <Input
                            {...field}
                            placeholder="business"
                            disabled={isPending || editSlug === false}
                          />
                          <Edit className="border p-2 w-9 h-9 rounded-sm" onClick={() => setEditSlug(!editSlug)} />

                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          disabled={isPending}
                          className="bg-input text-background"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>
            </Card>
          </div>
          <div className="md:w-[350px] space-y-5">
            <Button disabled={isPending} type="submit" className="w-full py-7">
              Submit Post
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
