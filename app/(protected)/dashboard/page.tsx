import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { db } from "@/lib/db";

const breadcrumbItems = [{ title: "Settings", link: "/dashboard/settings" }];


export default async function DashboardHome() {


  const res = await db.user.findMany()

  let alert = "No Database"
  if(res) {
    alert = "Database Connected"
  }

  return (
    <div className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Dashboard"
          description="Manage your account settings"
        />
        <div>
          {alert}
        </div>
      </div>
    </div>
  );
}
