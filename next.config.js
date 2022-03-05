const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com"
    ]
  },
  pwa: {
    dest: "public",
    runtimeCaching
  },
  async redirects() {
    return [
      {
        source: "/account",
        destination: "/account/settings",
        permanent: true
      }
    ];
  }
});
