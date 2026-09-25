/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRIPE_TOKEN: process.env.STRIPE_TOKEN,
    CONSUMER_SECRET: process.env.CONSUMER_SECRET,
    CONSUMER_KEY: process.env.CONSUMER_KEY,
  },
  output: "standalone",
  images: {
    domains: ["gamingfingers.de", "gamingfingers.com"],
  },
};

module.exports = nextConfig;
