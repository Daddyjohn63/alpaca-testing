import { Logo } from "@/components/logo"
import Link from "next/link"
import { interestingNavItems, boringNavItems} from "@/constants/nav-routes"


type LinkObj = {
  text: string;
  href: string;
}

type NavCardProps = {
  title: string;
  links: LinkObj[]
}

function NavCol(props: NavCardProps) {

  const {title, links} = props

return (
  <div className="space-y-4">
    <h5 className="text-lg bold text-muted-foreground">{title}</h5>
    <ul className="space-y-1">
      {!!links && links.map((item, i) => {
        return (
          <li key={i}>
            <Link href={item.href} className="hover:text-primary">
              {item.text}
            </Link>
          </li>
        )})}
    </ul>
  </div>
  )}

export function MarketingFooter() {

  const currentYear = "2024"

  return (
    <section className="bg-muted pt-16 pb-5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        <div className="space-y-3 md:max-w-[300px]">
          <Logo size="xs" />
          <p className="text-sm">Alpaca Stack is designed to get you started blazingly fast, allowing you to zero in on what truly matters: building your product and accelerating your path to profits.</p>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row gap-5 md:gap-10">
            <li>
              <NavCol title="Interesting Links" links={interestingNavItems}/>
            </li>
            <li>
              <NavCol title="Boring Links" links={boringNavItems}/>
            </li>
          </ul>
        </div>
      </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Copyright © {currentYear} [Your Company Name]. All rights reserved.</p>
        </div>
    </div>
    </section>
  )
}
