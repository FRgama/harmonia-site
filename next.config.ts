import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/produto", destination: "/#tema-experiencia", permanent: true },
      { source: "/personas", destination: "/#tema-pessoas", permanent: true },
      { source: "/requisitos", destination: "/#tema-requisitos", permanent: true },
      { source: "/arquitetura", destination: "/#tema-tecnologia", permanent: true },
      { source: "/investimento", destination: "/#tema-tecnologia", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
