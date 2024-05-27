import { MarketingHeader } from "@/components/marketing/sections/header-section";
import { MarketingFooter } from "@/components/marketing/sections/footer-section";
import { redirect } from "next/navigation";
import { currentRole } from "@/lib/auth";
import { notFound } from "next/navigation";
import { siteConfig } from "@/site-config";
import { getSEOMetadata } from "@/lib/seo";

export const metadata = getSEOMetadata()

const MarketingLayout = async ({ children }: { children: React.ReactNode }) => {

  const role = await currentRole()
  const isStagingEnv = process.env.STAGING_ENV === 'true'
  const isUnderConstruction = siteConfig.isUnderConstruction

  if(isStagingEnv && role !== 'ADMIN') {
    return notFound()
  }

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
