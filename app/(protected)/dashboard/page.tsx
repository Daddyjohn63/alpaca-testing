import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
const breadcrumbItems = [{ title: "Settings", link: "/dashboard/settings" }];

export default function DashboardHome() {
  return (
    <div className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Dashboard"
          description="Manage your account settings"
        />
        <div>
          dddd
        </div>
      </div>
    </div>
  );
}
