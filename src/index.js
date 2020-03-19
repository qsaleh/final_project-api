const PORT = process.env.PORT || 19003;

const app = require("./application");
const server = require("http").Server(app);
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

(async() => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
  });
  const clientSecret = paymentIntent.client_secret;
  // Pass the client secret to the client

})();

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
