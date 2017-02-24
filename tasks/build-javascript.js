import path from "path";

export default (gulp, plugins) => {
  const paths = {
    input: {
      entry: path.join(__dirname, "../source/lib/whit/whit.js"),
      context: path.join(__dirname, "../source/lib/")
    },
    output: path.join(__dirname, "../dist/unoptimized/")
  };

  const webpackConfig = {
    entry: paths.input.entry,
    output: {
      path: paths.output,
      filename: "whit.js"
    },
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
  };

  gulp.task("build-javascript", done => {
    plugins.webpack(webpackConfig, (error, stats) => {
      console.log(stats);
      done();
    });
  });
};
