module.exports = function(config) {
  config.set({
    files: [
      {pattern: "spec/**/*.js", watched: true, included: true, served: true},
      {pattern: "source/**/*.js", watched: true, included: false, served: false}
    ],
    preprocessors: {
      "spec/**/*.js": ["babel"]
    },
    "babelPreprocessor": {
      // options go here
    }
  });
};
