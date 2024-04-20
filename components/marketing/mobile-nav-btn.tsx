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
import { Logo } from "../logo";
import { marketingNavItems } from "@/constants/nav-routes";


export function MobileNavBtn() {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button><MenuIcon /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Logo size="xs" />
        </SheetHeader>
        <div className="py-5">
          <nav id="mobile-navigation">
            <ul>
              <li>
                <Link href="/login">
                  <Button className="text-md w-full mb-5">Sign In</Button>
                </Link>
              </li>
              {!!marketingNavItems && marketingNavItems.map((item, i) => {
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
