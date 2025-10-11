// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // Zorg dat imports als "@/lib/..." en "@/components/..." werken
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
