import gulp from "gulp";
import path from "path";
import loadPlugins from "gulp-load-plugins";
import runSequence from "run-sequence";

const tasksPath = path.join(__dirname, "tasks");
const taskFiles = require("fs").readdirSync(tasksPath);

const plugins = loadPlugins();
plugins.runSequence = runSequence;

taskFiles.forEach(taskFile => require(path.join(tasksPath, taskFile))(gulp, plugins));
