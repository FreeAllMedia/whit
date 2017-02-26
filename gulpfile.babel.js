import gulp from "gulp";
import path from "path";
import loadPlugins from "gulp-load-plugins";

const tasksPath = path.join(__dirname, "tasks");
const taskFiles = require("fs").readdirSync(tasksPath);

const plugins = loadPlugins();

taskFiles.forEach(taskFile => require(path.join(tasksPath, taskFile)).default(gulp, plugins));
