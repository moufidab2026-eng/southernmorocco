/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/southernmorocco',
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
