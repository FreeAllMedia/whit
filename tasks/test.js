import { server as karma } from "karma";

export default function (gulp) {
  gulp.task("test", () => {
    karma.start({
      configFile: "../karma.conf.js",
      singleRun: false
    });
  });
}
