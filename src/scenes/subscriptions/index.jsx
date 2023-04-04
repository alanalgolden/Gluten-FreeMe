import { Box, Typography, Button } from "@mui/material";
import getStripe from "../../core/utils/stripe";
import { UserContext } from "../../core/Providers/UserProvider";
import { useContext } from "react";

const Subscriptions = () => {
  const { user } = useContext(UserContext);
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.REACT_APP_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: "customer@email.com",
    });
    console.warn(error.message);
  }

  return (
    <Box>
      <Typography variant="h2">Test</Typography>
      <Button onClick={handleCheckout}>Checkout</Button>
    </Box>
  );
};

export default Subscriptions;
