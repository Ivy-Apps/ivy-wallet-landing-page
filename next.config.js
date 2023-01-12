/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const intercept = require("intercept-stdout");
intercept((text) => (text.includes("Duplicate atom key") ? "" : text));

module.exports = nextConfig;
