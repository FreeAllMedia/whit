module.exports = (gulp, plugins) => {
  gulp.task("build", done => {
    plugins.runSequence(
      "build-clean",
      "build-javascript",
      done
    );
  });
};
