import { AdminSidebar } from "@/components/admin/sidebar";
import { DashboardHeader } from "@/components/dashboard/sections/header-section";
import { Logo } from "@/components/logo";
import { adminNavItems } from "@/constants/nav-routes";
import { currentRole } from "@/lib/auth";
import { redirect } from "next/navigation";


const AdminLayout = async ({ children }: { children: React.ReactNode; }) => {

  const role = await currentRole()

  if(role !== 'ADMIN'){
    redirect('/dashboard')
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r md:flex py-3 px-5 md:flex-col md:gap-10">
        <div>
          <Logo size="xs" />
          <div className="text-center">
          <span className="bg-destructive rounded-sm px-2 py-1 text-xs">Admin Dashboard</span>
          </div>
        </div>
        <AdminSidebar navItems={adminNavItems} />
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

export default AdminLayout
