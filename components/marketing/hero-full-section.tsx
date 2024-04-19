import { YoutubeEmbed } from "@/components/youtube-embed";
import { Button } from "../ui/button";
import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });

export function HeroFullSection() {
  return (
      <section>
        <div className="container">
          <div className="text-center space-y-5 max-w-5xl mx-auto py-10">
            <h3 className={`${caveat.className} text-3xl sm:text-5xl`}>Struggling to ship your online startup?</h3>
            <h1 className="text-5xl sm:text-6xl font-black">Launch Your SaaS in Minutes, Not Months!</h1>
            <p className="text-xl">Skip the tedious, time-consuming boilerplate code and focus on launching your idea to achieve product-market fit blazingly fast!</p>
            <Button size="lg">Git Clone AlpacaStack</Button>
          </div>
          <div className="pb-5 sm:py-10 flex justify-between sm:gap-10 sm:justify-center">
            <div className="lg:flex gap-3 space-y-3 sm:space-y-2 items-center">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">1</span></div>
              <div>git clone</div>
            </div>
            <div className="lg:flex gap-3 space-y-3 sm:space-y-2 items-center">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">2</span></div>
              <div>Config .ENV</div>
            </div>
            <div className="lg:flex gap-3 space-y-3 sm:space-y-2 items-center">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">3</span></div>
              <div>npm install</div>
            </div>
            <div className="lg:flex gap-3 space-y-3 sm:space-y-2 items-center">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">4</span></div>
              <div>Deploy</div>
            </div>
            <div className="lg:flex gap-3 space-y-3 sm:space-y-2 items-center">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">5</span></div>
              <div>Profit</div>
            </div>

          </div>
          <div className="py-5">
            <div className="container">
              <YoutubeEmbed embedId="njX2bu-_Vw4?si=Lf0WKk7dzZqGKQ3j" />
            </div>
          </div>
        </div>
      </section>
  )
}
