/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig; 