import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "ltmedia",
  project: "ltm-website",
}, {
  widenClientFileUpload: process.env.NODE_ENV === 'production',
  transpileClientSDK: false,
  tunnelRoute: "/monitoring",
  hideSourceMaps: process.env.NODE_ENV === 'production',
  disableLogger: true,
  enableInstrumentServer: true,
  enableInstrumentServerCode: true,
});