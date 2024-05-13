'use client'
import Link from "next/link";
import { deleteMediaById } from "@/actions/media/delete-media";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PaginationControls } from "@/components/pagination-controls";
import { useState, useEffect, useTransition} from "react";
import Image from "next/image";
import { type Media } from "@prisma/client";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddMediaSchema } from "@/schemas";

type MediaGridProps = {
  data: Media[];
  page: number;
  count: number;
  totalPages: number;
}

const PaginatedMediaGrid = (props: MediaGridProps) => {

  const {data, count, page, totalPages} = props;

  const bucketUrl = 'https://f005.backblazeb2.com/file/alpacastack-post-images'
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [previewMedia, setPreviewMedia] = useState<Media>()
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof AddMediaSchema>>({
    resolver: zodResolver(AddMediaSchema),
    defaultValues: {
      altText: '',
      description: '',
    }
  });

  const deleteMedia = async (mediaId: number) => {
    await deleteMediaById(mediaId)
    setOpenDialog(false)
    window.location.reload()
  }

  const onSubmit = (values: z.infer<typeof AddMediaSchema>) => {

    console.log(values)
    return

    startTransition(async () => {

      const payload = {
        mediaId: values.id,
        altText: '',
        description: ''
      }
      //Update existing post, else add new post.
      updateMediaData(payload)
        .then((data) => {

          if(data.error) {
            setError(data.error)
          }
          if(data.success) {
            update();
            setSuccess(data.success)

            //update slug in input form
            if(data.data.slug) {
              const updatedSlug = data.data.slug
              form.setValue("slug", updatedSlug)
            }

          }

        })
        .catch((data) => {
          setError(data.error)
        })

    });
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data && data.map((media) => {
          return (
            <div key={media.id} className="space-y-4">

              <div className="w-full aspect-video rounded-md overflow-hidden flex items-center justify-center bg-muted border-2 border-transparent hover:border-primary">
                <Link href={`/admin/media/edit-media/${media.id}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BLOG_POST_IMAGE_PATH}/${media.imagePath}`}
                  className="w-full"
                  alt={media.altText || 'media item'}
                  width="550"
                  height="310"
                />
              </Link>
              </div>
            </div>
          )
        })}
      </div>
      <div className="pt-10">
        {count > 0 ? <PaginationControls totalPages={totalPages} page={page}/> : ''}
      </div>
    </div>
  )

}

export default PaginatedMediaGrid
