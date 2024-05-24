/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "default",
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '4000',
                pathname: '/uploads/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/uploads/**',
            },
        ],
    },
}

module.exports = nextConfig
