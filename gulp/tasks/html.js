// import webpHtmlNosvg from "gulp-webp-html-nosvg"
import versionNumber from "gulp-version-number"
import gulpPlumber from "gulp-plumber"
import notify from "gulp-notify"
import browserSync from "browser-sync"

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(gulpPlumber(
            notify.onError({
                title: 'HTML',
                message: "Error: <%= error.message %>"
            })
        ))
        // .pipe(webpHtmlNosvg())
        .pipe(versionNumber({
            'value': '%DT%',
            'append': {
                'key': '_v',
                'cover': 0,
                'to': ['css', 'js'],
            },
            'output': { 'file': 'gulp/version.json' }
        }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(browserSync.stream())
}