/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.traction.one','raw.githubusercontent.com']
  }
}

module.exports = nextConfig
