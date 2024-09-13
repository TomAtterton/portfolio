const nextConfig = {
  async redirects() {
    return [
      // Redirect recipevault.tomatterton.com to /recipe-vault
      {
        source: '/', // Catch the root of subdomain
        has: [{ type: 'host', value: 'recipevault.tomatterton.com' }],
        destination: '/recipe-vault',
        permanent: true,
      },
      // Redirect subpaths like recipevault.tomatterton.com/privacy-policy to /recipe-vault/privacy-policy
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'recipevault.tomatterton.com' }],
        destination: '/recipe-vault/:path*',
        permanent: true,
      },
      // Redirect ONLY invalid paths on tomatterton.com to the homepage
      {
        source: '/:path*', // Catch all paths
        has: [{ type: 'host', value: 'tomatterton.com' }], // Apply only to tomatterton.com
        destination: '/', // Redirect to homepage
        permanent: true,
        // Only redirect if the path is invalid (doesn't exist in pages/)
        missing: [{ type: 'query', key: ':path*' }],
      },
    ];
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
