var gulp = require('gulp');
var concat = require('gulp-concat');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var path = {
    css: './src/**/*.css',
    js: './src/**/*.js',
    html: {
        pages: './src/pages/**/*.hbs',
        components: './src/components/**/*.hbs',
        componentsPath: './src/components'
    },
    images: './src/**/images/*',
    build: {
        root: './build/**',
        css: './build/',
        js: './build/',
        html: './build/',
        images: './build/images'
    }
};

gulp.task('html', function () {
    return gulp.src(path.html.pages)
        .pipe(handlebars({}, {
                ignorePartials: true,
                batch: path.html.componentsPath
            }
        ))
        .pipe(rename({
            dirname: '.',
            extname: '.html'
        }))
        .pipe(gulp.dest(path.build.html));
});

gulp.task('css', function () {
    return gulp.src(path.css)
        .pipe(concat('main.css'))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('js', function () {
    return gulp.src(path.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('images', function () {
    return gulp.src(path.images)
        .pipe(rename({dirname: '.'}))
        .pipe(gulp.dest(path.build.images));
});

gulp.task('watch', function () {
    gulp.watch(path.html.pages, ['html']);
    gulp.watch(path.html.components, ['html']);
    gulp.watch(path.css, ['css']);
    gulp.watch(path.js, ['js']);
    gulp.watch(path.images, ['images']);
});

gulp.task('hotReload', function () {
    browserSync.init({
        server: {
            baseDir: path.build.html
        }
    });
    gulp.watch(path.build.root, browserSync.reload)
});

gulp.task('prod', ['html', 'css', 'js','images']);

gulp.task('default', ['html', 'css', 'images', 'js', 'watch', 'hotReload' ]);



