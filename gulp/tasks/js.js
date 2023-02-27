import browserSync from "browser-sync"
import webpackStream from "webpack-stream"
export const Js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })

        .pipe(webpackStream({
            mode: 'development',
            output: {
                filename: "app.min.js"
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(browserSync.stream())
}