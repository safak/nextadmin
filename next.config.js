/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.hulemekina.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
