module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: "",
    // frameworks to use
    frameworks: ["mocha", "chai", "sinon"],
    // Pre-process files
    preprocessors: {
      "spec/**/*.js": ["webpack"]
    },

    // list of files / patterns to load in the browser
    files: [
      //{pattern: "lib/whit/whit.js", watched: true, included: false, served: false},
      {pattern: "spec/**/*.js", watched: true, included: true, served: true}
    ],

    webpack: {
      cache: true,
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            query: {
              presets: ["latest"]
            }
          }
        ]
      }
    },

    webpackServer: {
        // webpack-dev-server configuration
        // webpack-dev-middleware configuration
    },

    // the port used by the webpack-dev-server
    // defaults to "config.port" + 1
    webpackPort: 1234,

    // list of files to exclude
    exclude: [],


    // test results reporter to use
    // possible values: "dots", "progress", "junit", "growl", "coverage", "osx"
    reporters: ["story", "growl"],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    //browsers: ["Chrome", "Safari", "Firefox"],
    //browsers: ["Safari"],
    //browsers: ["Firefox"],
    browsers: ["Chrome"],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 10000,

    browserNoActivityTimeout: 10000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
