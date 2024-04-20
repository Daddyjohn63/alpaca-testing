import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

type Feature = {
  name: string,
  included: boolean    
}
type Props = {
  tier: string;
  price: string;
  features: Feature[];
  btnName?: string;
  btnHref?: string;
  mostPopular?: boolean;
  footerText?: string;
}

export function PricingCard(props: Props) {

  const {tier, price, features, btnName = "Buy Now!", btnHref = "#", mostPopular = false, footerText = "Start building today"} = props

  return (
    <div className={`${mostPopular ? "border-2 border-primary" : ""} relative w-[380px] bg-card rounded-md px-9 py-14`}>
      {!!mostPopular && (
        <span className="bg-accent px-5 py-2 text-card absolute top-0 -right-4 rotate-12">Most Popular</span>
      )}
      <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-3xl font-bold text-center">{tier}</h3>
        <h4 className="text-3xl font-semibold text-center">${price}<span> usd</span></h4>
      </div>
      <ul className="space-y-3">
        {!!features && features.map((feature, i) => {
          return <li key={i} className={`flex gap-2 ${!feature.included ? "text-muted-foreground" : ""}`}>
            {feature.included ? <CheckCircle className="text-accent" size={29} /> : <XCircle size={30}/>} {feature.name}</li>
        })}
      </ul>
      <div className="space-y-4">
        {!!btnName && (
          <Button className="w-full bg-primary text-primary-foreground" asChild>
            <Link href={btnHref}>
              {btnName}
            </Link>
          </Button>
        )}
          <div className="text-center text-sm">
            {footerText}
          </div>
      </div>
    </div>
    </div>
  )
}
