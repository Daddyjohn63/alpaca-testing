import { MarketingHeader } from "@/components/marketing/header";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MarketingHeader />
      {children}
    </div>
  )
}

export default MarketingLayout
