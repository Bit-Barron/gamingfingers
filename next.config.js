/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRIPE_TOKEN: "sk_test_51N3PcuF8j0Y1AkmM4TYh7joCr4sTLHTtHPXAknqSOxENkFpL0B4PMdefhwQ3Z2TiuvER0QnWX3UgK1iUjyFSgLcD00oaExbJz4",
    CONSUMER_SECRET: "cs_bdf157192fabf79150c73daddf867d106db2c13b",
    CONSUMER_KEY: "ck_9296be97c44ed317137dc18944e29f2bfbf74500"
  },
  images: {
    domains: ["gamingfingers.de", "gamingfingers.com"],
  },
};

module.exports = nextConfig;
