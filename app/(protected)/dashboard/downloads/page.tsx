import { CTAAlert } from "@/components/cta-alert";
import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";
import { siteConfig } from "@/site-config";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const breadcrumbItems = [{ title: "Downloads", link: "/dashboard/downloads" }];

const DownloadsPage = async () => {

  const user = await currentUser()

  if(!user) {
    redirect('/login')
  }

  const userData = await db.user.findFirst({
    where: {
      id: user.id
    }, 
    select: {
      stripePriceId: true,
      hasAccess: true
    }
  })

  if(!userData) {
    return <>Something went wrong</>
  }

  const priceId = userData.stripePriceId;
  const hasAccess = user.hasAccess;

  return (
    <div>
        <BreadCrumb items={breadcrumbItems} />
        <Heading
          title="Downloads"
          description="Download your purchased products"
        />
      {!hasAccess && (
        <CTAAlert />
      )}
      {hasAccess && (
        <div className="max-w-3xl">
          <div className="flex flex-col gap-3">
            ddd

            {siteConfig && siteConfig.stripe.plans.map((plan, i) => {

              if(plan.priceId === priceId) {
                return (
                  <div key={i} className="border p-5 rounded-md">
                    <h3>Alpaca Stack ({plan.name})</h3>
                    <p>{plan.description}</p>
                    <div className="flex gap-3 mt-3">
                      <Button size="sm">Github</Button>
                      <Button size="sm">Download</Button>
                    </div>
                  </div>
                )
              }
            })}

          </div>            
        </div>
      )}
    </div>
  )

}

export default DownloadsPage;
