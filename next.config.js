/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProduction && { output: 'export' }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

