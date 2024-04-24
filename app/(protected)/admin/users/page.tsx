import BreadCrumb from "@/components/admin/breadcrumb";
const breadcrumbItems = [{ title: "Posts", link: "/admin/posts" }];
import { Heading } from "@/components/ui/heading";

const UsersPage = () => {
  return (
    <div className="h-full">
      <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Posts"
          description="Manage blog posts here"
        /> 
      </div>
    </div>
  )
}
export default UsersPage;
