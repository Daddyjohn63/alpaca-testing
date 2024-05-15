import { cn } from "@/lib/utils"

export function HowToSection({className}: {className?: string}) {

  return (
      <section className={cn(className)}>
      <div className="container">
          <div className="flex justify-between sm:gap-10 sm:justify-center">
            <div className="lg:flex gap-3 items-center">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">1</span></div>
              <div className="mt-3 lg:mt-0">git clone</div>
            </div>
            <div className="lg:flex gap-3 items-center">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">2</span></div>
              <div className="mt-3 lg:mt-0">Config .ENV</div>
            </div>
            <div className="lg:flex gap-3 items-center">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">3</span></div>
              <div className="mt-3 lg:mt-0">npm install</div>
            </div>
            <div className="lg:flex gap-3 items-center">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">4</span></div>
              <div className="mt-3 lg:mt-0">Deploy</div>
            </div>
            <div className="lg:flex gap-3 items-center">
              <div className="flex justify-center"><span className="bg-foreground text-background rounded-full w-8 h-8 font-bold justify-center items-center text-md flex">5</span></div>
              <div className="mt-3 lg:mt-0">Profit</div>
            </div>

          </div>
          </div>
      </section>
  )
}
