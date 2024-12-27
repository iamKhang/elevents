/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['levents.asia', 'product.hstatic.net'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', 
      },
    ];
  },
};

export default nextConfig;
