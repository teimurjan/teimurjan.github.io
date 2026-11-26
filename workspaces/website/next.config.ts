import withBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})({
  output: 'export',
  turbopack: {},
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
})

export default nextConfig
