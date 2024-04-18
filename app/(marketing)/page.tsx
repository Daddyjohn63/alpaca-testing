import { Button } from "@/components/ui/button";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

const Home = async () => {
  return (
    <main>
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
      <section id="featured-on-section" className="py-5">
        <div className="flex gap-5 items-center justify-center">
          <div className="text-sm">Featured On</div>
          <div>Logo 1</div>
          <div>Logo 2</div>
          <div>Logo 3</div>
          <div>Logo</div>
        </div>
      </section>
      <section id="hero-testimonials-section" className="py-5">
        <div className="container flex gap-6 justify-center">
          <div className="flex gap-3">
            <div>
              <div className="w-10 h-10 rounded-full border-2 border-foreground bg-muted"></div>
            </div>
            <div>
              <div className="mb-2 italic">Lorem ipsum something here that is good</div>
              <div className="text-sm"><strong>John Smith</strong> | @johnsmith</div>
              <div className="text-xs">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <div className="w-10 h-10 rounded-full border-2 border-foreground bg-muted"></div>
            </div>
            <div>
              <div className="mb-2 italic">Lorem ipsum something here that is good</div>
              <div className="text-sm"><strong>John Smith</strong> | @johnsmith</div>
              <div className="text-xs">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <div className="w-10 h-10 rounded-full border-2 border-foreground bg-muted"></div>
            </div>
            <div>
              <div className="mb-2 italic">Lorem ipsum something here that is good</div>
              <div className="text-sm"><strong>John Smith</strong> | @johnsmith</div>
              <div className="text-xs">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>
      <section id="intro-section" className="py-10">
        <div className="container lg:flex">
          <div>Image Here</div>
          <div className="space-y-3">
            <h2 className="text-3xl font-black">Why Use AlpacaStack</h2>
            <div className="space-y-2">
              <p><strong>The reality</strong> — Developing a modern, production-ready website from the ground up is a monumental task that can stretch over months. </p>
              <p><strong>That’s Where Alpaca Stack Comes In!</strong> </p>
              <p>With Alpaca Stack, bid farewell to the countless, tedious hours spent coding and debugging the mundane boilerplate code. The Alpaca Stack is designed to get you started blazingly fast, allowing you to zero in on what truly matters: building your product and accelerating your path to profits.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2>Everything You Need To Get Started</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum nibh ac magna ullamcorper, id accumsan elit euismod. </h4>
        </div>
      </section>
     <section className="py-5">

      </section> 

    </main>
  );
}
export default Home
