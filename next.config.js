/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now stable in Next.js 15, no experimental flag needed
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig