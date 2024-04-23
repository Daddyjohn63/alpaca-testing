import { Heading } from "@/components/ui/heading";
import BreadCrumb from "@/components/admin/breadcrumb";

function PostDetailsPage() {

  const breadcrumbItems = [{ title: "Post Details", link: "/admin/" }];
  return (
    <div className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Post Details Page"
          description="Manage post details here"
        /> 
      </div>
    </div>
  )
}

export default PostDetailsPage
