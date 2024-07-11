/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_mongodbURI: process.env.NEXT_PUBLIC_mongodbURI,
      },
};

export default nextConfig;
