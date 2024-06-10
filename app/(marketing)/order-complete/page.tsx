import { Button } from "@/components/ui/button"
import Link from "next/link"

const OrderCompletePage = () => {
  return (
    <div className="min-h-[600px] flex justify-center items-center">
      <div className="text-center space-y-6">
        <div className="text-7xl">🎉</div>
        <div className="space-y-3">
          <h1 className="text-5xl font-black">Order Complete</h1>
          <p>Thank you for your order. Visit your dashboard to get access.</p>
        </div>
        <Button><Link href="/dashboard">Dashboard</Link></Button>
      </div>
    </div>
  )
}

export default OrderCompletePage;
