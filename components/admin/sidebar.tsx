'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { NavItems } from "@/types";

export function AdminSidebar({navItems}: {navItems: NavItems[]}) {

  const pathname = usePathname()

  return (
    <aside className="flex flex-col justify-between h-full gap-5">
      <ul className="space-y-1">
        {!!navItems && navItems.map((item, i) => {

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
    </aside>
  )
}
