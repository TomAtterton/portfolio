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
  async redirects() {
    return [
      {
        source: '/recipe-vault',
        destination: 'https://recipevault.tomatterton.com',
        permanent: true,
      },
      {
        source: '/recipe-vault/:path*',
        destination: 'https://recipevault.tomatterton.com/:path*',
        permanent: true,
      },
    ];
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
