'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { SidebarCTA } from "../marketing/blog-cta";
import { Logo } from "@/components/logo";
import { dashboardNavItems } from "@/constants/nav-routes";
import { CreditCard } from "lucide-react";
import { Button } from "../ui/button";

export function DashboardSidebar() {

  const pathname = usePathname()

  const handleBillingPortal = async () => {

    try {
      const res = await fetch('/api/stripe/create-portal', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
            returnUrl: window.location.href
        })
      })

      if(!res) {
        console.log("Could not get billing portal URL")
      }

      const data = await res.json()

      //Redirect to billing portal in stripe
      window.location.href = data.url;

    } catch(e) {
      console.log(e)
    }

  }

  return (
    <aside className="hidden border-r bg-muted/40 md:flex py-3 px-5 md:flex-col md:gap-10 w-72">
      <div>
      <Logo size="sm" className="hidden md:block"/>
      </div>
      <div className="flex flex-col gap-5 justify-between h-screen">
      <ul className="space-y-1">
        {!!dashboardNavItems && dashboardNavItems.map((item, i) => {

          const Icon = Icons[item.icon || "dashboard"]

          return (
            <li key={i}>
                <Link href={item.href} className={`${item.href === pathname ? "bg-muted-foreground/30" : ""} flex gap-3 w-full justify-left items-center p-3 hover:bg-primary hover:text-primary-foreground rounded-md`}>
                 <Icon /> {item.text}
                </Link>
            </li>
          ) 
         })}
            <li>
                <Button onClick={handleBillingPortal} variant="link" className="text-foreground/90 gap-3 w-full text-md justify-start items-center p-3 hover:bg-primary hover:text-primary-foreground rounded-md hover:no-underline">
                 <CreditCard/> Billing
                </Button>
            </li>
      </ul>
          <SidebarCTA 
            image="cta-img.jpg"
            title="Upgrade Right Now!" 
            description="Upgrade to a premium account and get full access to all features."
            btnText="Upgrade Now!" 
            btnHref="https://google.com"/>
      </div>
    </aside>
  )
}
