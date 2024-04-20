import { cn } from "@/lib/utils"
type Props = {
  title: string;
  subtitle?: string;
  className?: string;
}
//TODO:Fix CN Space issue
export function SectionTitle(props: Props) {

  const {title, subtitle, className} = props
  return (
  <div className={cn(`${className} space-y-4`)}>
      <h2 className="text-4xl font-black">{title}</h2>
      <p className="text-lg">{subtitle}</p>
  </div>
  )
}
