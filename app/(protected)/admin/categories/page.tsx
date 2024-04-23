import { Heading } from "@/components/ui/heading";
import BreadCrumb from "@/components/admin/breadcrumb";
const breadcrumbItems = [{ title: "Categories", link: "/admin/categories" }];

function PostsPage() {
  return (
    <div className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Categories"
          description="Manage blog post categories here"
        /> 
      </div>
    </div>
  )
}

export default PostsPage
