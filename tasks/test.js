import { server as karma } from "karma";

export default (gulp) => {
  gulp.task("test", () => {
    karma.start({
      configFile: __dirname + "/../karma.conf.js",
      singleRun: false
    });
  });
};
