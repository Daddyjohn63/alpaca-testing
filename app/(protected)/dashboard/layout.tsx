import { Sidebar } from "@/components/dashboard/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}

export default DashboardLayout
