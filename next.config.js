/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true,
  },
  // Generate unique build IDs to ensure proper cache busting
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
}
