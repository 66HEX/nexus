/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,

    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    minSize: 20000,
                    maxSize: 244000,
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        framework: {
                            name: 'framework',
                            chunks: 'all',
                            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
                            priority: 40,
                            enforce: true
                        },
                        commons: {
                            name: 'commons',
                            chunks: 'all',
                            test: /[\\/]node_modules[\\/]/,
                            priority: 20
                        }
                    }
                }
            };
        }
        return config;
    },

    headers: async () => [
        {
            source: '/:all*(svg|jpg|png)',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=31536000, must-revalidate'
                }
            ]
        }
    ],

    swcMinify: true,
    productionBrowserSourceMaps: true,
};

export default nextConfig;