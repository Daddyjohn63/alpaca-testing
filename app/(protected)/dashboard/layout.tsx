import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/sections/header-section";
import { Logo } from "@/components/logo";
import { dashboardNavItems } from "@/constants/nav-routes";

const DashboardLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <div className="flex h-screen">
        <DashboardSidebar />
        <main className="w-full">
          <DashboardHeader />
          {children}
        </main>
      </div>
    </>
  );
}

export default DashboardLayout
