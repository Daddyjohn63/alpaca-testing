'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { adminNavItems } from "@/constants/nav-routes";
import { Logo } from "../logo";


export function AdminSidebar() {

  const pathname = usePathname()

  return (
    <aside className="hidden border-r bg-muted/40 md:flex py-3 px-5 md:flex-col md:gap-10 w-72">

      <Logo size="xs" className="hidden md:block"/>
      <div className="flex flex-col justify-between h-full gap-5">
      <ul className="space-y-1">
        {!!adminNavItems && adminNavItems.map((item, i) => {

          const Icon = Icons[item.icon || "dashboard"]

          return (
            <li key={i}>
                <Link href={item.href} className={`${item.href === pathname ? "bg-muted-foreground/30" : ""} flex gap-3 w-full justify-left items-center p-3 hover:bg-primary hover:text-primary-foreground rounded-md`}>
                 <Icon /> {item.text}
                </Link>
            </li>
          ) 
         })}
      </ul>
      </div>
    </aside>
  )
}
