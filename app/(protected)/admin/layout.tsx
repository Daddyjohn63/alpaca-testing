import { AdminSidebar } from "@/components/admin/sidebar";
import { AdminHeader } from "@/components/admin/sections/header-section";
import { currentRole } from "@/lib/auth";
import { redirect } from "next/navigation";


const AdminLayout = async ({ children }: { children: React.ReactNode; }) => {

  const role = await currentRole()

  if(role !== 'ADMIN'){
    redirect('/dashboard')
  }

  return (
    <>
      <div className="flex h-screen">
        <AdminSidebar />
        <main className="w-full">
          <AdminHeader />
          {children}
        </main>
      </div>
    </>
  );
}

export default AdminLayout
