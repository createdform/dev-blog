import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline'
    https://maps.googleapis.com
    giscus.app
    https://www.googletagmanager.com
    https://96bf5589028b.ngrok-free.app
    http://localhost:3000
    https://challenges.cloudflare.com
    https://cdn.tailwindcss.com
    https://cdn.peakly.com.au;
  script-src-elem 'self' 'unsafe-inline'
    https://maps.googleapis.com
    https://www.googletagmanager.com
    https://challenges.cloudflare.com
    https://cdn.tailwindcss.com
    https://cdn.peakly.com.au
    http://localhost:3000;   
  object-src 'none';
  style-src 'self' 'unsafe-inline';
  img-src * blob: data: https://*.devinreeks.com https://devinreeks.com;
  media-src 'none';
  connect-src *;
  font-src 'self';
  frame-src
    giscus.app
    https://imgflip.com
    https://cdn.peakly.com.au
    https://app.peakly.com.au
    http://localhost:3000
    https://www.youtube.com
    https://challenges.cloudflare.com
    https://cdn.tailwindcss.com
    https://96bf5589028b.ngrok-free.app
    https://www.youtube-nocookie.com;
`;


const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  images: {
    domains: ['*.devinreeks.com', 'devinreeks.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
}

export default withBundleAnalyzer(nextConfig)
