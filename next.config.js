// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     // appDir: true,
//   },
//   images: {
//     domains: ['randomuser.me'],
//   },
// };

// module.exports = nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
};

module.exports = nextConfig;
