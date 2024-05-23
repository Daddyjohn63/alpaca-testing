import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { stripe, createStripeCustomer } from "@/lib/stripe";
import { getUserStripeId } from "@/data/user";

export async function POST(req: NextRequest) {

  const body = await req.json();
  const {priceId, mode, successUrl, cancelUrl} = body;
  const user = await currentUser()

  if(!user) {
    return NextResponse.json({error: "Not Authorized!"})
  }
  if(!priceId){
    return NextResponse.json({error: "Price ID is required"})
  }
  if(!mode) {
    return NextResponse.json({error: "Mode is required"})
  }
  if(!successUrl) {
    return NextResponse.json({error: "Success URL is required"})
  }
  if(!cancelUrl) {
    return NextResponse.json({error: "Cancel URL is required"})
  } 

  try {

    //Get stripeCustomerId from user table;
    let stripeCustomerId = await getUserStripeId(user.id)
    
    //if user does not have a stripe customer Id. then we create one. 
    if(!stripeCustomerId) {

      stripeCustomerId = await createStripeCustomer(user.name, user.email)

      if(!stripeCustomerId) {
        throw new Error("Could not create stripe customer Id")
      }

      //Add stripe customerId to user in database
      const userData = await db.user.update({
        where: {
          id: user.id
        },
        data: {
          stripeCustomerId: stripeCustomerId
        }
      })

      if(!userData || !userData.stripeCustomerId) {
        throw Error()
      }

    }

    //This creates the checkout url
    const stripeSession = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      client_reference_id: user.id,
      mode: 'payment',
      allow_promotion_codes: true,
      line_items: [{price: priceId, quantity: 1,}],
      customer_update: {address: "auto", name: "auto"},
      billing_address_collection: 'auto',
      payment_method_types: ['card'],
      success_url: successUrl, //`${domainUrl}/payment/success`,
      cancel_url: cancelUrl, //`${domainUrl}/payment/canceled`,
    });

    return NextResponse.json({status: 200, url: stripeSession.url})
  }
  catch(e) {
    console.log(e)
    return NextResponse.json({status: 500, error: e})
  }
}
