/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "/v0/b/vasilkoff-test.appspot.com/o/**",
            },
        ],
        domains: ["firebasestorage.googleapis.com"],
    },
};

module.exports = nextConfig;
