import BreadCrumb from "@/components/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];
const ProfilePage = () => {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Profile"
          description="Manage your profile information"
        /> 
      </div>
    </ScrollArea>
  );
}
export default ProfilePage