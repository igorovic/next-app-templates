const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ["cdn.chec.io"],
  },
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ["error"],
    },
  },
};
