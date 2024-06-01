import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Caveat } from "next/font/google";
import { cn } from "@/lib/utils";


const caveat = Caveat({ subsets: ["latin"] });

export function Hero1Section({className}: {className?: string}) {
  return (
      <section className={className}>
        <div className="container">
          <div className="text-center space-y-5 max-w-5xl mx-auto py-10">
            <h3 className={`${caveat.className} text-3xl sm:text-5xl`}>Struggling to ship your online startup?</h3>
            <h1 className="text-5xl sm:text-6xl font-black">Launch Your SaaS Startup in Minutes, Not Months!</h1>
            <p className="text-xl">Skip the tedious, time-consuming boilerplate code and focus on launching your idea to achieve product-market fit blazingly fast!</p>
            <Button size="lg" asChild>
            <Link href="#pricing-section">
            Git Clone AlpacaStack
            </Link>
            </Button>
          </div>
        </div>
      <Image alt="hero Image" src="/hero-img.jpg" width={1100} height={617} className="mx-auto rounded-md my-10 border border-muted-foreground shadow-2xl shadow-black/70" />
      </section>
  )
}
