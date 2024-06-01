import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Caveat } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero2Section({className}: {className?: string}) {
  return (
      <section className={className}>
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
          <div className="space-y-5 mx-auto text-center sm:text-left">
            <h1 className="text-3xl sm:text-2xl md:text-4xl font-black">[Unlock/Create/Discover] [Your/Your Business’s] Full Potential with [Product/Service]!</h1>
            <p className="text-md">Experience [enhanced productivity, ease of use, innovation, etc.] with [specific features or aspects of your product/service]. [Learn more/Get started/Join us] today and see the difference!</p>
            <Button size="lg" asChild>
            <Link href="#pricing-section">Buy Now!</Link>
            </Button>
          </div>
        <div>
      <Image alt="hero Image" src="https://place-hold.it/510x450" width={0} height={0} className="w-full mx-auto rounded-md" />
        </div>
        </div>
      </section>
  )
}
