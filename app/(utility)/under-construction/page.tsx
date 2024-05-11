import Image from "next/image";
import { Logo } from "@/components/logo";

const UnderConstructionPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="space-y-6 max-w-4xl">
      <Logo className="flex justify-center"/>
      <h1 className="text-6xl font-black text-center">Under Construction</h1>
        <p className="text-lg text-center">Sorry for the inconvenience. Our website is currently undergoing scheduled maintenance and updates, but will return shortly. Thank you for your patience!</p>
      <Image src="/under_construction_alpaca.jpg"  width="440" height="440" alt="Under Construction" className="mx-auto"/>
      </div>
    </div>
  )
}
export default UnderConstructionPage;
