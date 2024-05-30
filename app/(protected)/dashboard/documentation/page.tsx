import { CTAAlert } from "@/components/cta-alert";
import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const breadcrumbItems = [{ title: "Documentation", link: "/dashboard/documentation" }];

const DownloadsPage = async () => {

  const user = await currentUser()

  if(!user) {
    redirect('/login')
  }

  const hasAccess = user.hasAccess;

  if(hasAccess) {
    redirect('https://docs.alpacastack.com')
  } 

  return (
    <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Training"
          description="Video Training for Alpaca Stack"
        />
        <CTAAlert />
    </div>
  )

}

export default DownloadsPage;
