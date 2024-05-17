import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [{ title: "Billing", link: "/dashboard/billing" }];
const BillingPage = () => {
  return (
      <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Billing Page"
          description="Manage billing here"
        /> 
      </div>
  );
}
export default BillingPage;

