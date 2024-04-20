import { MarketingHeader } from "@/components/marketing/sections/header-section";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MarketingHeader />
      {children}
    </div>
  )
}

export default MarketingLayout
