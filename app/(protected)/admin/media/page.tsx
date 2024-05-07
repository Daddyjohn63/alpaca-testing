import { Heading } from "@/components/ui/heading";
import BreadCrumb from "@/components/admin/breadcrumb";
import { db } from "@/lib/db";
import { PaginationControls } from "@/components/pagination-controls";
import Link from "next/link";
import { AddMediaButton } from "@/components/admin/add-media-button";


type ParamsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const breadcrumbItems = [{ title: "Media", link: "/admin/media" }];


const MediaPage = async ({searchParams}: ParamsProps) => {

  const page = Number(searchParams.page) || 1;
  const take = Number(searchParams.take) || 18;
  const skip = (page - 1) * take

  const data = await db.media.findMany({
    take: take,
    skip: skip,
    orderBy: {
      createdAt: 'desc'
    },
  })

  //Count total published posts for pagination
  const count = await db.media.count()
  const totalPages = Math.ceil(count / take);

  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
      <div>
        <BreadCrumb items={breadcrumbItems} />
          <Heading
            title={`Media (${count})`}
            description="Manage images here"
          /> 
        </div>
        <AddMediaButton />
      </div>
      <div>
        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {data && data.map((media) => {

              return (
                <div key={media.id} className="space-y-4">
                  <Link href={`blog/${media.id}`}>
                    <div className="w-full aspect-video rounded-md overflow-hidden flex items-center justify-center bg-muted border-2 border-transparent hover:border-primary">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BLOG_POST_IMAGE_PATH}/${media.imagePath}`}
                        className="w-full"
                        alt={media.altText || 'media item'}
                      />
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className="pt-10">
          {count > 0 ? <PaginationControls totalPages={totalPages} page={page}/> : ''}
        </div>
      </div>

    </div>
  )
}

export default MediaPage
