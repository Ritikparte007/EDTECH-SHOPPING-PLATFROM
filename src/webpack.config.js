module.exports = {
  // Other webpack configuration options
  resolve: {
    fallback: {
      "assert": require.resolve("assert/")
    },
  },
};
