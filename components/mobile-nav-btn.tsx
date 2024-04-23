"use client"

import { Icons } from "@/components/icons";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo";
import { NavItems } from "@/types";
import { useCurrentUser } from "@/hooks/use-current-user";
import { usePathname } from "next/navigation";
export function MobileNavBtn({navItemsArray}: {navItemsArray: NavItems[]}) {

  const user = useCurrentUser()
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="px-2"><MenuIcon /></Button>
      </SheetTrigger>
      <SheetContent className="bg-background" side="left">
        <SheetHeader>
          <Logo size="xs" />
        </SheetHeader>
        <div className="py-5">
          <nav id="mobile-navigation">
            <ul className="space-y-1">
              <li>
               {!user && (
                  <Link href="/login">
                    <Button className="text-md w-full mb-5">Sign In</Button>
                  </Link>
               )} 
              </li>
              {!!navItemsArray && navItemsArray.map((item, i) => {

                const Icon = Icons[item.icon || "dashboard"]

                return (
                  <li key={i}>
                    <Link href={item.href} className={`${pathname === item.href ? "bg-muted" : ""} hover:bg-primary hover:text-primary-foreground p-3 rounded-sm flex gap-2 items-center`}>
                      {item.icon && <Icon />} {item.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
