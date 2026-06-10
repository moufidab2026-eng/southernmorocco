// next.config.js – Cloudflare Pages adapter
/** @type {import('next').NextConfig} */
const { nextOnPages } = require('@cloudflare/next-on-pages');

module.exports = nextOnPages({
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  reactStrictMode: true,
  experimental: { appDir: true },
});
