import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Exclude React Three Fiber and related packages from server-side bundling
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        {
          '@react-three/fiber': 'commonjs @react-three/fiber',
          '@react-three/drei': 'commonjs @react-three/drei',
          'three': 'commonjs three',
        },
      ];
    }
    return config;
  },
};

export default nextConfig;
