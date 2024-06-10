import { CheckCircle, XCircle } from "lucide-react"
import { BuyNowBtn } from "@/components/buy-now-btn"
import { currentUser } from "@/lib/auth"

type Feature = {
  name: string,
  included: boolean    
}
type Plan = {
  name: string;
  price: number;
  features: Feature[];
  isFeatured?: boolean;
  priceId: string;
  mode: string;
  successRedirect: string;
}

export async function PricingCard({data}: {data: Plan}) {

  const {name, price, features, isFeatured, priceId, mode, successRedirect} = data
  const user = await currentUser()

  return (
    <div className={`${isFeatured? "border-2 border-primary" : ""} relative w-[380px] bg-card rounded-md px-9 py-14`}>
      {!!isFeatured && (
        <span className="bg-accent px-5 py-2 text-card absolute top-0 -right-4 rotate-12">Most Popular</span>
      )}
      <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-3xl font-bold text-center">{name}</h3>
        <h4 className="text-3xl font-semibold text-center">${price.toString()}<span> usd</span></h4>
      </div>
      <ul className="space-y-3">
        {!!features && features.map((feature, i) => {
          return <li key={i} className={`flex gap-2 ${!feature.included ? "text-muted-foreground" : ""}`}>
            {feature.included ? <CheckCircle className="text-accent" size={29} /> : <XCircle size={30}/>} {feature.name}</li>
        })}
      </ul>
      <div className="space-y-4">
          <BuyNowBtn user={user} btnText={name} priceId={priceId} mode={mode} successRedirect={successRedirect} />
      </div>
    </div>
    </div>
  )
}
