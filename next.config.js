const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
            '/blog': { page: '/blog' },
            '/hire-me': { page: '/hire-me' },
        };
    },
    assetPrefix: isProd ? '/' : '',
};
