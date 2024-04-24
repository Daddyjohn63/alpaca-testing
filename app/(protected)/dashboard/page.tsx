import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { db } from "@/lib/db";

const breadcrumbItems = [{ title: "Settings", link: "/dashboard/settings" }];

export default async function DashboardHome() {

  return (
      <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Dashboard"
          description="Manage your account settings"
        />
    </div>
  );
}
