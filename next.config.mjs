/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.perfumedistri.com',
                pathname: '/storage/media/**',
            },
        ],
    },
};

export default nextConfig;
