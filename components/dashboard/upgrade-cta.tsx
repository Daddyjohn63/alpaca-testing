import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
export function UpgradeCTA() {
  return (
    <div className="border border-border bg-background p-5 rounded-md space-y-4">
      <Image src="/upgrade-img.jpg" width={200} height={135} alt="Upgrade Image"/> 
      <div className="space-y-2">
      <h3 className="font-bold text-xl">Upgrade To Pro</h3>
      <p className="text-sm">Unlock all features and get access to our private community and support.</p>
      <Button>
        <Link href="#">Upgrade Now</Link>
      </Button>
    </div>
    </div>

  )
}
