import browserSync from "browser-sync"
import dartSass from "sass"
import gulpSass from "gulp-sass"
import rename from "gulp-rename"
import GulpCleanCss from "gulp-clean-css"
// import webpcss from "gulp-webpcss"
import autoPrefixer from "gulp-autoprefixer"
import groupCssMediaQueries from "gulp-group-css-media-queries"


const sass = gulpSass(dartSass)
export const scss = () => {
    return app.gulp.src(app.path.src.scss, { soursemaps: true })
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        // .pipe(webpcss({
        //     webpClass: '.webp',
        //     noWebpClass: '.no-webp'
        // }))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
        }))
        // на случай если понадобится не сжатая копия
        // .pipe(app.gulp.dest(app.path.build.css))
        .pipe(GulpCleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(browserSync.stream())
}