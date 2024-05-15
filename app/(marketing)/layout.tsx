import { MarketingHeader } from "@/components/marketing/sections/header-section";
import { MarketingFooter } from "@/components/marketing/sections/footer-section";
import { isUnderConstruction } from "@/routes";
import { redirect } from "next/navigation";
import { currentRole } from "@/lib/auth";

const MarketingLayout = async ({ children }: { children: React.ReactNode }) => {

  const role = await currentRole()

  if(isUnderConstruction && role !== 'ADMIN') {
   redirect('/under-construction') 
  }


  return (
    <div>
      {isUnderConstruction && (
        <div className="text-center p-1 bg-destructive text-white">Under Construction Mode Active</div>
      )}
      <MarketingHeader />
      <div>
      {children}
      </div>
      <MarketingFooter />
    </div>
  )
}

export default MarketingLayout
