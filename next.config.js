/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  strictMode: true,
  env: {},
  build: {
    extend(config, {}) {
      config.node = {
        fs: "empty",
      };
    },
  },
};

module.exports = nextConfig;
