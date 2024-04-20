import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MobileNavBtn } from "@/components/marketing/mobile-nav-btn";
import { marketingNavItems } from "@/constants/nav-routes";
import { currentUser } from "@/lib/auth";

export async function MarketingHeader() {

  const user = await currentUser()

  return (
    <header className="py-5">
      <div className="container flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <nav id="desktop-navigation" className="hidden md:block">
          <ul className="flex">
            {!!marketingNavItems && marketingNavItems.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.href}>
                    <Button variant="link" className="text-md">
                      {item.label}
                    </Button>
                  </Link>
                </li>
              )
            })}
            <li className="pl-2 md:pl-5">
              {!user && (
                <Link href="/login">
                  <Button className="text-md">Sign In</Button>
                </Link>
              )}
              {!!user && (
                <Link href="/dashboard">
                  <Button className="text-md">Dashboard</Button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <MobileNavBtn />
        </div>
      </div>
    </header>
  )

}

