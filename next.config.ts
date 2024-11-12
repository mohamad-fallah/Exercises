import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  env: {
    MY_API_URL: process.env.MY_API_URL,
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(new BundleAnalyzerPlugin());
    }
    return config;
  },

  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
  },
};

export default nextConfig;
