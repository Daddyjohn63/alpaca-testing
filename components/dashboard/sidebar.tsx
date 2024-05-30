'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { Logo } from "@/components/logo";
import { dashboardNavItems } from "@/constants/nav-routes";
import { useCurrentAccess } from "@/hooks/use-current-access";
import { Zap } from "lucide-react";
import { CTACard } from "@/components/cta-card";

export function DashboardSidebar() {

  const pathname = usePathname()
  const hasAccess = useCurrentAccess()

  return (
    <aside className="hidden border-r bg-muted/40 md:flex py-3 px-5 md:flex-col md:gap-10 w-80">
      <div>
      <Logo size="sm" className="hidden md:block"/>
      </div>
      <div className="flex flex-col gap-5 justify-between h-screen">
      <ul className="space-y-1">
        {!!dashboardNavItems && dashboardNavItems.map((item, i) => {

          const Icon = Icons[item.icon || "dashboard"]

          return (
            <li key={i}>
                <Link href={item.href} className={`${item.href === pathname ? "bg-muted-foreground/30" : ""} flex gap-3 w-full justify-between items-center p-3 hover:bg-primary hover:text-primary-foreground rounded-md`}>
                  <div className="flex justify-left gap-3">
                 <Icon /> 
                  {item.text}
                  </div>
                  {!!item.upgrade && !hasAccess && <Zap className="border border-muted-foreground r-md p-[5px] w-7 h-7 rounded-md" />}
                </Link>
            </li>
          ) 
         })}
      </ul>
        {!hasAccess && (
          <CTACard 
            image="cta-img.jpg"
            title="Upgrade Right Now!" 
            description="Upgrade to a premium account and get full access to all features."
            btnText="Upgrade Now!" 
            btnHref="/#pricing-section"/>
        )}
      </div>
    </aside>
  )
}
