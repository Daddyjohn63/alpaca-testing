import BreadCrumb from "@/components/admin/breadcrumb";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [{ title: "Users", link: "/admin/users" }];

const UsersPage = () => {
  return (
    <div className="h-full">
      <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Users"
          description="Manage users here"
        /> 
      </div>
    </div>
  )
}
export default UsersPage;
