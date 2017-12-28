'use strict';

var gulp              = require('gulp'),
    gutil             = require("gulp-util"),
    favicons          = require('favicons').stream;

gulp.task("fav", function () {
    gulp.src("./src/logo.png")
        .pipe(favicons({
            appName: 'app',
            appDescription: 'app',
            developerName: 'app',
            developerURL: 'app',
            background: 'transparent',
            path: "./build",
            url: 'app',
            display: 'browser',
            orientation: 'portrait',
            version: '1.0',
            logging: false,
            online: false,
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: { offset: 25 },
                favicons: true,
                firefox: false,
                windows: true,
                yandex: true
            },
            html: "./build/favicons.html",
            replace: false
        }))
        .on("error", gutil.log)
        .pipe(gulp.dest("./build"));
});