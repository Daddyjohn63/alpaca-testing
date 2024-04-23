import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/sections/header-section";
import { Logo } from "@/components/logo";
import { dashboardNavItems } from "@/constants/nav-routes";

const DashboardLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:flex py-3 px-5 md:flex-col md:gap-10">
        <div>
          <Logo size="xs" />
        </div>
        <DashboardSidebar navItems={dashboardNavItems} />
      </div>
      <div className="flex flex-col">
        <DashboardHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout
