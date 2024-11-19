import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            { hostname: "lh3.googleusercontent.com" },
            { hostname: "avatars.githubusercontent.com" }
        ]
    },
    experimental: {
        reactCompiler: true
    }
};

export default nextConfig;
