import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];
const SomethingPage = () => {
  return (
    <div className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Something Page"
          description="Manage something here"
        /> 
      </div>
    </div>
  );
}
export default SomethingPage
