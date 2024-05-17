import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-04-10",
    typescript: true,
})

export const getStripeSession = async ({priceId, domainUrl, customerId}: {priceId: string, domainUrl: string; customerId: string}) => {

    const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: 'subscription',
        billing_address_collection: 'auto',
        line_items: [{
            price: priceId,
            quantity: 1
        }],
        payment_method_types: ['card'],
        customer_update: {
            address: 'auto',
            name: 'auto',
        },
        success_url: `${domainUrl}/payment/success`,
        cancel_url: `${domainUrl}/payment/canceled`,
    });

    return session.url as string;

}

