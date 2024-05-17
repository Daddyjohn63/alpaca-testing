import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [{ title: "Something", link: "/dashboard/something" }];
const SomethingPage = () => {
  return (
      <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Something Page"
          description="Manage something here"
        /> 
      </div>
  );
}
export default SomethingPage
