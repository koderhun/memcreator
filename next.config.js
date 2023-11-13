/** @type {import('next').NextConfig} */

let envImageUnoptimize = process.env.NODE_ENV !== 'production' ? false : true
const nextConfig = {
  output: process.env.NODE_ENV !== 'production' ? undefined : 'export',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
