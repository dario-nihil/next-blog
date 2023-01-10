const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfigDev = {
  reactStrictMode: true,
  env: {
    mongodb_username: "dario",
    mongodb_password: "BNFJu2qjdTQXsTv4",
    mongodb_clustername: "cluster0",
    mongodb_database: "my-site-dev",
  },
};

const nextConfigProd = {
  reactStrictMode: true,
  env: {
    mongodb_username: "dario",
    mongodb_password: "BNFJu2qjdTQXsTv4",
    mongodb_clustername: "cluster0",
    mongodb_database: "my-site",
  },
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfigDev;
  }

  return nextConfigProd;
};
