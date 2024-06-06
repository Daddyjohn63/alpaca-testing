import { cn } from "@/lib/utils"

export function SectionWrapper({children, className, backgroundImg}: {children?: React.ReactNode, className?: string, backgroundImg?: string}) {

  return (
    <section className={`${cn("relative py-20 bg-cover bg-center bg-no-repeat", className)}`} style={{backgroundImage: backgroundImg ? `url('${backgroundImg}')` : undefined}}>
        {children}
    </section>
  )
}

export const SectionOverlay = ({className}: {className?: string}) => {
  
  return (
    <div className={`${cn("absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-10", className)}`}></div>
  )
}

export function SectionContainer({className, children}: {className?: string, children?: React.ReactNode}) {
  return (
    <div className={`${cn("container relative z-50", className)}`}>{children}</div>
  )
}

export function SectionColumn({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`${cn("space-y-5", className)}`}>{children}</div>
  )
}

export function SectionHeading1({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <h1 className={`${cn("text-4xl md:text-5xl font-black", className)}`}>{children}</h1>
  )
}
export function SectionHeading2({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <h2 className={`${cn("text-3xl md:text-4xl font-black", className)}`}>{children}</h2>
  )
}
export function SectionHeading3({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <h3 className={`${cn("text-2xl md:text-3xl font-black", className)}`}>{children}</h3>
  )
}
export function SectionHeading4({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <h4 className={`${cn("text-2xl md:text-2xl font-black", className)}`}>{children}</h4>
  )
}
export function SectionSubHeading({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <p className={`${cn("text-lg", className)}`}>{children}</p>
  )
}

export function SectionContent({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`${cn("text-lg", className)}`}>{children}</div>
  )
}

export function SectionBtnGroup({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`${cn("w-full flex flex-wrap gap-4", className)}`}>{children}</div>
  )
}
