/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect any "www.epfdesk.com" request → non-www (https://epfdesk.com)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.wflimited.com",
          },
        ],
        destination: "https://wflimited.com/:path*",
        permanent: true,
      },

      // Redirect any HTTP request (non-www) → HTTPS (non-www)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "wflimited.com",
          },
        ],
        destination: "https://wflimited.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;