// main module
import gulp from "gulp"

// paths
import { path } from "./gulp/config/path.js"


// plugins
import { plugins } from "./gulp/config/plugins.js"

// passing values in global variable

global.app = {
    path: path,
    gulp: gulp,
}

//tasks import
import { reset } from "./gulp/tasks/reset.js"
import { copy } from "./gulp/tasks/copy.js"
import { html } from "./gulp/tasks/html.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
// import { css } from "./gulp/tasks/css.js"
import { Js } from "./gulp/tasks/js.js"


//changes-watcher
const mainTasks = gulp.parallel(html, copy, scss, Js)
const watcher = () => {
    gulp.watch(path.watch.assets, copy)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.js, Js)
}

//building scenarios of performing tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server),)

// default scenario
gulp.task('default', dev)