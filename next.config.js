/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            { hostname: "lh3.googleusercontent.com" },
            { hostname: "avatars.githubusercontent.com" }
        ]
    }
};

module.exports = nextConfig;
