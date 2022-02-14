import NextStripe from "next-stripe";

export default NextStripe({
  Stripe_Key: process.env.STRIPE_SECRET_KEY,
});
