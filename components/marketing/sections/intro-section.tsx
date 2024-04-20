import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
export function IntroSection({className}: {className?: string}) {
  return (
  
      <section id="intro-section" className={cn(className)}>
        <div className="container sm:grid sm:grid-cols-2">
          <div className="mb-5 sm:mb-0"><Image alt="intro-img" src="/alpaca-intro-img.jpg" width={480} height={580} /></div>
        <div className="flex items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-black">Why Use AlpacaStack</h2>
            <div className="space-y-2">
              <p><strong className="text-accent">The reality</strong> — Developing a modern, production-ready website from the ground up is a monumental task that can stretch over months. </p>
              <p><strong className="text-accent">That’s Where Alpaca Stack Comes In!</strong> </p>
              <p>With Alpaca Stack, bid farewell to the countless, tedious hours spent coding and debugging the mundane boilerplate code. Alpaca Stack is designed to get you started blazingly fast, allowing you to zero in on what truly matters: building your product and accelerating your path to profits.</p>
            </div>
            <h4 className="font-bold text-lg">Time saved using AlpacaStack:</h4>
            <ul className="space-y-1">
              <li className="flex gap-1"><Check className="text-accent" /> 4 hours to setup emails</li>
              <li className="flex gap-1"><Check className="text-accent" /> 12 hours designing a landing page</li>
              <li className="flex gap-1"><Check className="text-accent" /> 4 hours to setup stripe webhooks</li>
              <li className="flex gap-1"><Check className="text-accent" /> 2 hours impliementing SEO metadata</li>
              <li className="flex gap-1"><Check className="text-accent" /> 8 hours configuring user authentication</li>
              <li className="flex gap-1"><Check className="text-accent" /> 2 hours coding api routes</li>
              <li className="flex gap-1"><Check className="text-accent" /> TOTAL: 24+ hours of headaches!</li>
            </ul>
          </div>
          </div>
        </div>
      </section>
  )
}
