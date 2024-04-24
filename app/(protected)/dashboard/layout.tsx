import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/sections/header-section";
import { MarketingFooter } from "@/components/marketing/sections/footer-section";

const DashboardLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <div className="flex h-screen">
        <DashboardSidebar />
        <main className="w-full">
          <DashboardHeader />
          <div className="flex-1 space-y-4 p-4 md:p-10 pt-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default DashboardLayout
