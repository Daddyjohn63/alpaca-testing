import { Heading } from "@/components/ui/heading";
import BreadCrumb from "@/components/admin/breadcrumb";
const breadcrumbItems = [{ title: "Posts", link: "/admin/posts" }];

function PostsPage() {
  return (
    <div className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Posts"
          description="Manage blog posts here"
        /> 
      </div>
    </div>
  )
}

export default PostsPage
