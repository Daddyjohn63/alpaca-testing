import { Heading } from "@/components/ui/heading";
import BreadCrumb from "@/components/admin/breadcrumb";
import { AddCategoryForm } from "@/components/admin/add-category-form";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

type Params = {
  id: string;
}
const breadcrumbItems = [{ title: "Edit Category", link: "/admin/" }];

const PostDetailsPage = async({params}: {params: Params}) => {

  const {id} = params;

  if(!id) {
    return notFound()
  }

  const categoryData = await db.category.findFirst({
    where: {
      id
    }
  })

  if(!categoryData) {
    return notFound()
  }


  return (
    <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Edit Category"
          description="Edit your category here"
        /> 
        <AddCategoryForm 
          categoryData={categoryData}
        />
    </div>
  )
}

export default PostDetailsPage
