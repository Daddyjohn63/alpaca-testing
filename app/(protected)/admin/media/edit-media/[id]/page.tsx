import { Heading } from "@/components/ui/heading";
import BreadCrumb from "@/components/admin/breadcrumb";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { AddEditMediaForm } from "@/components/admin/add-edit-media-form";

type Params = {
  id: string;
}
const breadcrumbItems = [
  { title: "Media", link: "/admin/media" },
  { title: "Edit Media", link: "" }
];

const MediaDetailsPage = async({params}: {params: Params}) => {

  const {id} = params;

  if(!id) {
    return notFound()
  }

   const data = await db.media.findFirst({
     where: {
      id: parseInt(id)
     }
   })

   if(!data) {
     return notFound()
   }


  return (
    <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Edit Media Item"
          description="Edit your media item here"
        /> 
      <AddEditMediaForm mediaData={data} />
    </div>
  )
}

export default MediaDetailsPage
