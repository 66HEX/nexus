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
                            chunks: 'all',
                            name: 'framework',
                            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
                            priority: 40,
                            enforce: true
                        },
                        threejs: {
                            chunks: 'all',
                            name: 'threejs',
                            test: /[\\/]node_modules[\\/](@react-three|three)[\\/]/,
                            priority: 30
                        },
                        lib: {
                            test: /[\\/]node_modules[\\/]/,
                            priority: 20,
                            name(module) {
                                const packageName = module.context.match(
                                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                                )[1];
                                return `lib.${packageName.replace('@', '')}`;
                            }
                        }
                    }
                }
            };
        }
        return config;
    },

    // Eksperymentalne optymalizacje
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['@react-three/fiber', 'lenis', 'recharts']
    },

    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|png)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, must-revalidate'
                    }
                ]
            }
        ];
    },

    swcMinify: true,

    productionBrowserSourceMaps: true,
};

export default nextConfig;