import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";


const breadcrumbItems = [{ title: "Settings", link: "/dashboard/settings" }];

export default async function DashboardHome() {

  return (
      <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Dashboard"
          description="Manage your account settings"
        />
      <div className="grid grid-cols-4 gap-2">

      </div>
    </div>
  );
}
