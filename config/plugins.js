module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
  },
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
});
