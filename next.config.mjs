/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.myanimelist.net',
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
