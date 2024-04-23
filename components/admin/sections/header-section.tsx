import { Logo } from "@/components/logo"
import { MobileNavBtn } from "@/components/mobile-nav-btn";
import { UserNav } from "@/components/user-nav";
import { dashboardNavItems } from "@/constants/nav-routes";

export async function AdminHeader() {

  return (
    <header className="py-3 bg-muted border-b border-border">
      <div className="container md:max-w-full flex justify-between items-center">
        <div className="md:hidden">
          <MobileNavBtn navItemsArray={dashboardNavItems} />
        </div>
        <div>
          <Logo className="md:hidden" size="xs" />
        </div>
        <div>
          <UserNav />
        </div>
      </div>
    </header>
  )

}
