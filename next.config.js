/** @type {import('next').NextConfig} */
const configuredSiteUrl = process.env.SITE_URL || 'https://msbplastering.com'
const canonicalOrigin = configuredSiteUrl.replace(/\/+$/, '')
const canonicalHost = new URL(canonicalOrigin).host
const alternateHost = canonicalHost.startsWith('www.')
    ? canonicalHost.slice(4)
    : `www.${canonicalHost}`
const enableHostRedirect = canonicalHost.includes('.')
const distDir = process.env.NEXT_DIST_DIR || '.next'

const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    distDir,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    async redirects() {
        if (!enableHostRedirect) {
            return []
        }

        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: alternateHost,
                    },
                ],
                destination: `${canonicalOrigin}/:path*`,
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
