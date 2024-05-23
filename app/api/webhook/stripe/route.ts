import Stripe from "stripe";
import { NextResponse, NextRequest} from 'next/server';
import { stripe } from '@/lib/stripe';
import { db } from '@/lib/db';
import { getCheckoutSession } from '@/lib/stripe';
import { siteConfig } from '@/site-config';

export async function POST(req: NextRequest) {

  console.log("Webhook hit")

  const payload = await req.text()
  // const response = JSON.parse(payload)
  const sig = req.headers.get("Stripe-Signature")

  // const dateTime = new Date(response?.created * 1000).toLocaleDateString()
  // const timeString = new Date(response?.created * 1000).toLocaleDateString()

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

    //This is where all the magic happens.
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':

        const checkoutSessionCompleted = event.data.object;
        const sessionId = checkoutSessionCompleted.id;
        const session = await getCheckoutSession(sessionId);

        if(!session) {
          break;
        }

        //Grab important data from customer session
        const customerId = session.customer;
        const clientReferenceId = session.client_reference_id;
        let priceId: string | undefined
        if (session.line_items?.data[0]?.price) {
          priceId = session?.line_items?.data[0]?.price.id;
        }

        const plan = siteConfig.stripe.plans.some((plan) => plan.priceId === priceId) 

        if(!plan || !clientReferenceId || !priceId) {
          break;
        }

        //Get customer data to update email in database.
        const stripeCustomerData = (await stripe.customers.retrieve(
          customerId as string
        )) as Stripe.Customer;

        //Update user in database and Allow access to product
        await db.user.update({
          where: {
            id: clientReferenceId,
          },
          data: {
            email: stripeCustomerData.email,
            stripePriceId: priceId,
            hasAccess: true,
          }
        })

        //Send email after successful purchase. 

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
    }

    return NextResponse.json({status: "Success", event: event.type});

  }
  catch(e) {
    console.log(e)
    return NextResponse.json({status: "Failed", e})
  }


}
