module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com"
    ]
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
};
