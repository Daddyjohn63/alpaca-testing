"use client"
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

export function MobileNavBtn({navItemsArray}: {navItemsArray: NavItems[]}) {

  const user = useCurrentUser()

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
            <ul>
              <li>
               {!user && (
                  <Link href="/login">
                    <Button className="text-md w-full mb-5">Sign In</Button>
                  </Link>
               )} 
              </li>
              {!!navItemsArray && navItemsArray.map((item, i) => {
                return (
                  <li key={i}>
                    <Link href={item.href}>
                      <Button variant="link" className="text-md">
                        {item.text}
                      </Button>
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
