import Stripe from 'stripe';
import { NextResponse, NextRequest} from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
  typescript: true,
})

export async function POST(req: NextRequest) {

  const payload = await req.text()
  const response = JSON.parse(payload)

  const sig = req.headers.get("Stripe-Signature")

  const dateTime = new Date(response?.created * 1000).toLocaleDateString()
  const timeString = new Date(response?.created * 1000).toLocaleDateString()

  let event;

  // Verify Stripe webhook. 
  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  }
  catch(error) {
    return NextResponse.json({status: "Error"});
  }

  try {
    console.log("event", event.type)

    //This is where all the magic happens.
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const checkoutSessionCompleted = event.data.object;
        // Then define and call a function to handle the event checkout.session.completed
        console.log(checkoutSessionCompleted)
        break;
      case 'checkout.session.expired':
        const checkoutSessionExpired = event.data.object;
        // Then define and call a function to handle the event checkout.session.expired
        break;
      case 'customer.subscription.deleted':
        const customerSubscriptionDeleted = event.data.object;
        // Then define and call a function to handle the event customer.subscription.deleted
        break;
      case 'customer.subscription.updated':
        const customerSubscriptionUpdated = event.data.object;
        // Then define and call a function to handle the event customer.subscription.updated
        break;
      case 'invoice.paid':
        const invoicePaid = event.data.object;
        // Then define and call a function to handle the event invoice.paid
        break;
      case 'invoice.payment_failed':
        const invoicePaymentFailed = event.data.object;
        // Then define and call a function to handle the event invoice.payment_failed
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }


    return NextResponse.json({status: "Success", event: event.type});

  }
  catch(error) {

    return NextResponse.json({status: "Failed", error})
  }


}
