const baseURL = "data center url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseURL: baseURL,
  },
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/components/*": ["components/*"],
      "@/utils": ["utils"],
      "@/utils/*": ["utils/*"],
      "@/lib/*": ["lib/*"],
      "@/public/*": ["public/*"],
    },
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["tailwindui.com", "images.unsplash.com"],
  },
  i18n: {
    localeDetection: false,
    locales: ["en-US"], // "zh-CN"
    defaultLocale: "en-US",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: baseURL + "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
