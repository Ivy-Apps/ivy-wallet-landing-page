/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
  }
};

const intercept = require("intercept-stdout");
intercept((text) => (text.includes("Duplicate atom key") ? "" : text));

module.exports = nextConfig;
