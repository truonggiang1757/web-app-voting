/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experiments: {
    asyncWebAssembly: true,
    importAsync: true
  }
}

module.exports = nextConfig
