import { cn } from "@/lib/utils"
import Image from "next/image"

const logos = [
  {
    name: 'Facebook',
    image: 'facebook-logo.svg',
  },
  {
    name: 'Twitch',
    image: 'twitch-logo.svg',
  },
  {
    name: 'LinkedIn',
    image: 'linkedin-logo.svg',
  },
  {
    name: 'Spotify',
    image: 'spotify-logo.svg',
  },
]

export function TrustLogosSection({className}: {className?: string}) {
  return (
      <section id="featured-on-section" className={cn(className)}>
        <div className="container grid grid-cols-1 gap-5 items-center justify-center">
          <div className="text-sm text-center font-bold">Featured On:</div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-2 items-center justify-center">
        {logos.map((logo, i) => {
          return (
          <li key={i} className="flex justify-center items-center"><Image src={`/${logo.image}`} width={130} height={50} alt="logo" /></li>
          )
        })}
        </ul>
        </div>
      </section>
  )
}
