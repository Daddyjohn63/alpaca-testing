/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'f005.backblazeb2.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
