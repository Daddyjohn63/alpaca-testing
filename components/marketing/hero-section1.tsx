import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Caveat } from "next/font/google";
import { cn } from "@/lib/utils";

export function HeroSection1({className}: {className?: string}) {
  return (
      <section className={cn(className)}>
        <div className="container">
          <div className="text-center space-y-5 max-w-5xl mx-auto pb-5">
            <h1 className="text-4xl sm:text-5xl font-black">[Unlock/Create/Discover] [Your/Your Business’s] Full Potential with [Product/Service]!</h1>
            <p className="text-xl">Experience [enhanced productivity, ease of use, innovation, etc.] with [specific features or aspects of your product/service]. [Learn more/Get started/Join us] today and see the difference!</p>
            <Button size="lg" asChild>
            <Link href="#pricing-section">
            Buy Now!
            </Link>
            </Button>
          </div>
        </div>
      <Image alt="hero Image" src="https://place-hold.it/1000x600" width={1100} height={617} className="mx-auto rounded-md my-10 border border-muted-foreground shadow-2xl shadow-black/70" />
      </section>
  )
}
