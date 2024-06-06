import { cn } from "@/lib/utils"

export function Section(
  {children, className, backgroundImg}:
  {children?: React.ReactNode, className?: string, backgroundImg?: string}){

  return (
    <section 
      className={`${cn("relative py-20 bg-cover bg-center bg-no-repeat", className)}`} 
      style={{backgroundImage: backgroundImg ? `url('${backgroundImg}')` : undefined}}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export const SectionOverlay = ({className}: {className?: string}) => {
  
  return (
    <div className={`${cn("absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-10", className)}`}></div>
  )
}

export function SectionContent({className, children}: {className?: string, children?: React.ReactNode}) {
  return (
    <div className={`${cn("space-y-2", className)}`}>{children}</div>
  )
}

export function SectionRow({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`${cn("flex flex-col sm:flex-row gap-10", className)}`}>{children}</div>
  )
}

export function SectionColumn({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`${cn("space-y-5 sm:flex-1", className)}`}>{children}</div>
  )
}


export function SectionHeader({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`${cn("text-center pb-10 space-y-4", className)}`}>{children}</div>
  )
}

export function SectionTitle1({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <h1 className={`${cn("text-4xl md:text-5xl font-black", className)}`}>{children}</h1>
  )
}
export function SectionTitle2({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <h2 className={`${cn("text-3xl md:text-4xl font-black", className)}`}>{children}</h2>
  )
}
export function SectionDescription({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <p className={`${cn("text-lg", className)}`}>{children}</p>
  )
}

// export function SectionContent({className, children}: {className?: string, children: React.ReactNode}) {
//   return (
//     <div className={`${cn("text-lg", className)}`}>{children}</div>
//   )
// }
//
export function SectionBtnGroup({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`${cn("w-full flex flex-wrap gap-4", className)}`}>{children}</div>
  )
}

export function SectionFooter({className, children}: {className?: string, children: React.ReactNode}) {
  return (
    <div className={`${cn("pt-5 text-center space-y-3", className)}`}>{children}</div>
  )
}

