import { Heading } from "@/components/ui/heading";
import BreadCrumb from "@/components/admin/breadcrumb";
import { AddPostForm } from "@/components/admin/add-post-form";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

type Params = {
  id: string;
}
const breadcrumbItems = [{ title: "Edit Post", link: "/admin/" }];

const PostDetailsPage = async({params}: {params: Params}) => {

  const {id} = params;

  if(!id) {
    return notFound()
  }

  const categories = await db.category.findMany()
  const postData = await db.post.findFirst({
    where: {
      id
    }
  })

  if(!postData) {
    return notFound()
  }


  return (
    <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Edit Post"
          description="Edit your post here"
        /> 
        <AddPostForm 
          categories={categories}
          postData={postData}
        />
    </div>
  )
}

export default PostDetailsPage
