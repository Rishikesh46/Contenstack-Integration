import * as Contentstack from "contentstack";

const Stack = Contentstack.Stack({
api_key: process.env.CS_API_KEY,
delivery_token: process.env.CS_DELIVERY_TOKEN,
environment: process.env.CS_ENVIRONMENT,
region: "us",
});

export default Stack;
