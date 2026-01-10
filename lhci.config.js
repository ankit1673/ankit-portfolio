module.exports = {
  ci: {
    collect: {
      url: ["http://127.0.0.1:8080/"],
      numberOfRuns: 1,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};