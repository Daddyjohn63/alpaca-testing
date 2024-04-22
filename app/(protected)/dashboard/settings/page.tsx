import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { SettingsForm } from "@/components/dashboard/settings-form";
import { Card } from "@/components/ui/card";

const breadcrumbItems = [{ title: "Settings", link: "/dashboard/settings" }];

const SettingsPage = () => {
  return (
    <div className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Settings"
          description="Manage your account settings"
        />
        <Card className="p-5 max-w-xl" >
          <SettingsForm />
        </Card>
      </div>
    </div>
  );
}
export default SettingsPage
