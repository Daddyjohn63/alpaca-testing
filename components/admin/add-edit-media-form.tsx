"use client";
import { siteConfig } from "@/site-config";
import Link from "next/link";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"
import { deleteMediaById } from "@/actions/media/delete-media";
import { updateMediaData } from "@/actions/media/update-media";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddMediaSchema} from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { type Media } from "@prisma/client";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Expand, Link as LinkIcon } from "lucide-react";

type AddMediaFormProps = {
  mediaData?: Media
}

type AddMediaPayload = {
  mediaId: string;
  altText: string;
  description: string;
}


export const AddEditMediaForm = (props: AddMediaFormProps) => {
  const {mediaData} = props

  const bucketUrl = siteConfig.fileStorage.bucketUrl
  const router = useRouter()

  //If postData exists and postData.id is not undefined, then its an edit post page. 
  const editMedia = mediaData && mediaData.id ? mediaData : undefined;

  const { update } = useSession();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof AddMediaSchema>>({
    resolver: zodResolver(AddMediaSchema),
    defaultValues: {
      altText: editMedia?.altText ?? '',
      description: editMedia?.description ?? ''
    },
  });

  const onSubmit = (values: z.infer<typeof AddMediaSchema>) => {

    setError(undefined);
    setSuccess(undefined);

    startTransition(async () => {

      //Craft payload data for database
      let payload: AddMediaPayload = {
        mediaId: mediaData?.id.toString() || '',
        altText: values.altText || '',
        description: values.description || '',
      }

      if(editMedia) {
      }

      //Add payload data to action to create in database
      updateMediaData(payload)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch((data) => {
          setError(data.error)
        });
    });

  };

  const deleteMedia = () => {

    if(!editMedia) {
      return
    }

    startTransition(async() => {
      deleteMediaById(editMedia.id)
        .then((data) => {
          if(data.error) {
            setError(data.error)
          }
          if(data.success) {
            setSuccess(data.success)
            setTimeout(() => {
              router.push('/admin/media')
            }, 1000)
          }
        })
        .catch((data) => {
          setError(data.error)
      });
    })
  }

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
                <FormLabel>Image Path</FormLabel>
                <div className="flex gap-3">
                  <Input disabled type="text" value={`${bucketUrl}/${editMedia?.imagePath}`}/>
                  <Button asChild>
                    <Link target="_blank" href={`${bucketUrl}/${editMedia?.imagePath}`}>
                      <LinkIcon />
                    </Link>
                  </Button> 
                </div>
                <FormField
                  control={form.control}
                  name="altText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alt Text</FormLabel>
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
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          disabled={isPending}
                          className="bg-input text-black"
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
              Update Media
            </Button>

            <Dialog>
              {editMedia && (
                <DialogTrigger className="relative">
                  <Expand className="absolute bg-primary text-primary-foreground w-8 h-8 p-2 rounded-sm right-2 top-2" />
                  <Image 
                    alt={editMedia.altText || ''} 
                    src={`${bucketUrl}/${editMedia.imagePath}`} 
                    width="255"
                    height="175"
                  />
                </DialogTrigger>
              )}
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    {editMedia && (
                      <Image 
                        alt={editMedia.altText || ''} 
                        src={`${bucketUrl}/${editMedia.imagePath}`} 
                        width="1000"
                        height="1000"
                      />
                    )}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {!!editMedia && (
              <div className="text-center">
                <Button type="button" variant="link" className="text-destructive" onClick={deleteMedia} >Delete Media</Button>
              </div>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
};
