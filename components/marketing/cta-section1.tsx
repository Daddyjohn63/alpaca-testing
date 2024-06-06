import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CTASection1({children, className, backgroundImg}: {children: React.ReactNode, className: string, backgroundImg?: string}) {

  return (
    <section className={`${cn(className)} relative bg-cover bg-center bg-no-repeat`} style={{backgroundImage: backgroundImg ? `url('${backgroundImg}')` : undefined}}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export function CTA2Cols({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`relative z-50 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14 ${cn(className)}`}>{children}</div>
  )
}

export function CTACol({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`space-y-5 flex flex-col items-center ${cn(className)}`}>{children}</div>
  )
}


export function CTATitle({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <h1 className={`text-4xl md:text-5xl font-black ${cn(className)}`}>{children}</h1>
  )
}

export function CTADescription({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <p className={`text-lg ${cn(className)}`}>{children}</p>
  )
}

export function CTABtnGroup({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`w-full flex flex-wrap gap-4 ${cn(className)}`}>{children}</div>
  )
}
