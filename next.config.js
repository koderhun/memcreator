/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development', // отключить pwa для разработки
  dest: 'public',
})
let envImageUnoptimize = process.env.NODE_ENV !== 'production' ? false : true

module.exports = withPWA({
  output: process.env.NODE_ENV !== 'production' ? undefined : 'export',
  reactStrictMode: true,
  swcMinify: true,
})
