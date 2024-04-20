import { MarketingHeader } from "@/components/marketing/sections/header-section";
import { MarketingFooter } from "@/components/marketing/sections/footer-section";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MarketingHeader />
      <div>
      {children}
      </div>
      <MarketingFooter />
    </div>
  )
}

export default MarketingLayout
