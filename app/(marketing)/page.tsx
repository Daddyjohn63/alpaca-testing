import { Button } from "@/components/ui/button";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

const Home = async () => {
  return (
    <main>
      <section className="py-10">
        <div className="container">
          <div className="text-center space-y-5 max-w-5xl mx-auto py-10">
            <h2 className={`${caveat.className} text-3xl sm:text-5xl`}>Struggling to ship your online startup?</h2>
            <h1 className="text-5xl sm:text-6xl font-black">Launch Your SaaS in Minutes, Not Months!</h1>
            <p className="text-xl">Skip the tedious, time-consuming boilerplate code and focus on launching your idea to achieve product-market fit blazingly fast!</p>
            <Button size="lg">Git Clone AlpacaStack</Button>
          </div>
          <div className="pb-5 sm:py-10 space-y-3 flex gap-3 sm:gap-10 justify-center">
            <div className="sm:flex gap-3 items-center space-y-3 sm:space-y-0">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">1</span></div>
              <div className="text-center">Git Clone</div>
            </div>
            <div className="sm:flex gap-3 items-center">
              <div><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">2</span></div>
              <div>Config .ENV</div>
            </div>
            <div className="sm:flex gap-3 items-center">
              <div><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">3</span></div>
              <div>npm install</div>
            </div>
            <div className="sm:flex gap-3 items-center">
              <div><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">4</span></div>
              <div>Deploy</div>
            </div>
            <div className="sm:flex gap-3 items-center">
              <div><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">5</span></div>
              <div>Profit</div>
            </div>

          </div>
          <div className="py-5">
            <div className="w-full aspect-video bg-gray-400 rounded-md">
              Image or video here
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>

          </div>
        </div>
      </section>

    </main>
  );
}
export default Home
