import { Heading } from "@/components/ui/heading";

function AdminDashboard() {
  return (
    <div className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Heading
          title="Admin Dashboard"
          description="Manage admin here"
        /> 
      </div>
    </div>
  )
}

export default AdminDashboard
