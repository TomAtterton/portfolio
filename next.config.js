/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/recipe-vault/privacy-policy',
        destination: '/recipe-vault/privacy-policy.js',
      },
    ];
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
