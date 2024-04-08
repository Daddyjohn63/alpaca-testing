import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SettingsForm } from "@/app/(protected)/dashboard/_components/settings-form";
import { Card } from "@/components/ui/card";

const breadcrumbItems = [{ title: "Settings", link: "/dashboard/settings" }];

const SettingsPage = () => {
  return (
    <ScrollArea className="h-full">
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
    </ScrollArea>
  );
}
export default SettingsPage