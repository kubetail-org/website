import type { NextConfig } from 'next';
import nextra from 'nextra';
import yn from 'yn';

let headers = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
];

// security headers (https://owasp.org/www-project-secure-headers/)
if (yn(process.env.SECURITY_HEADERS_ENABLE) === true) {
  headers.push(...[
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=31536000 ; includeSubDomains'
    },
    {
      key: 'X-Frame-Options',
      value: 'deny'
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'Content-Security-Policy',
      value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.gstatic.com; img-src 'self' 'unsafe-inline' https://assets.kubetail.com data:; media-src https://assets.kubetail.com; font-src https://fonts.gstatic.com; object-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests"
    },
  ]);
}

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    optimizePackageImports: [
      'nextra/components',
      'nextra-theme-docs',
    ],
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers,
      },
    ];
  },
} satisfies NextConfig;

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: {
    codeblocks: false,
  },
});

export default withNextra(nextConfig);
