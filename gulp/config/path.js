import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const srcFolder = `./src`
const buildFolder = `./dist`

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        assets: `${buildFolder}/assets/`,
    },
    src: {
        scss: `${srcFolder}/scss/styles.scss`,
        js: `${srcFolder}/js/app.js`,
        styles: `${srcFolder}/css/styles.css`,
        html: `${srcFolder}/*.html`,
        assets: `${srcFolder}/assets/**/*.*`
    },
    watch: {
        scss: `${srcFolder}/scss/**/*.*`,
        js: `${srcFolder}/js/**/*.js`,
        styles: `${srcFolder}/css/*.css`,
        assets: `${srcFolder}/assets/**/*.*`,
        html: `${srcFolder}/**/*.html`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,


}