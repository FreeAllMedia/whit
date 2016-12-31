export default (gulp, plugins) => {
  gulp.task("build", done => {
    plugins.runSequence(
      "build-clean",
      "build-javascript",
      done
    );
  });
};
