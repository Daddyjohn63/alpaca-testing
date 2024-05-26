import BreadCrumb from "@/components/dashboard/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { PricingCard } from "@/components/marketing/pricing-card"
import { siteConfig } from "@/site-config"
import { Alert, AlertDescription, AlertTitle, } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import { currentAccess } from "@/lib/auth";


export default async function DashboardHome() {

  const plans = siteConfig.stripe.plans
  const hasAccess = await currentAccess()

  return (
      <div>
        <Heading
          title="Dashboard"
          description="Manage your account settings"
        />
      Hello
    </div>
  );
}
