import BreadCrumb from "@/components/admin/breadcrumb"
import { Heading } from "@/components/ui/heading";
import { AddPostForm } from "@/components/admin/add-post-form";
import { Card } from "@/components/ui/card";

const breadcrumbItems = [
  { title: "Posts", link: "/admin/posts" },
  { title: "Add Post", link: "/admin/posts/add-post" }
];

const AddPostPage = () => {

  return (
    <>
      <BreadCrumb items={breadcrumbItems} />
      <Heading
        title={`Add Post`}
        description="Add blog post"
      /> 
      <Card className="p-5 max-w-3xl" >
        <AddPostForm />
      </Card>
    </>
  )
}
export default AddPostPage
