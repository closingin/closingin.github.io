
'use strict'

import gulp    from 'gulp'
import plugins from 'gulp-load-plugins'

import autoprefixer from 'autoprefixer'
import cssnano      from 'cssnano'
import runSequence  from 'run-sequence'

const $     = plugins()
const paths = {
    app    : 'src/',
    dest   : 'public/',
}

gulp.task('serve', () => {
    $.connect.server({
        name: 'Development',
        port: 3000,
        root: './',
        livereload: true
    })

    runSequence('build:dev', 'build:dist')

    gulp.watch(paths.app + '**/*.html', ['html'])
    gulp.watch(paths.app + 'css/**/*.scss', () => { runSequence('styles', 'build:dist') })
    gulp.watch(paths.app + 'js/**/*.js', () => { runSequence('scripts', 'build:dist') })
    gulp.watch(paths.app + 'images/**/*', ['images'])
    gulp.watch(paths.app + 'libs/**/*', ['libs'])
})

gulp.task('html', () =>
    gulp.src(paths.app + 'index.html')
        .pipe($.fileInclude())
        .pipe(gulp.dest('.'))
        .pipe($.connect.reload())
)

gulp.task('styles', () =>
    gulp.src(paths.app + 'css/app.scss')
        .pipe($.sass())
        .pipe(gulp.dest(paths.dest + 'css'))
)

gulp.task('scripts', () =>
    gulp.src(paths.app + 'js/**/*.js')
        .pipe(gulp.dest(paths.dest + 'js'))
)

gulp.task('images', () =>
    gulp.src(paths.app + 'images/**/*')
        .pipe(gulp.dest(paths.dest + 'images'))
        .pipe($.connect.reload())
)

gulp.task('libs', () =>
    gulp.src(paths.app + 'libs/**/**')
        .pipe(gulp.dest(paths.dest + 'libs'))
        .pipe($.connect.reload())
)

gulp.task('fonts', () =>
    gulp.src(paths.app + 'fonts/*')
        .pipe(gulp.dest(paths.dest + 'fonts'))
)

gulp.task('build:dev',  ['html', 'styles', 'scripts', 'images', 'libs', 'fonts'])

gulp.task('build:dist', () => {
    gulp.src(paths.dest + 'css/app.css')
        .pipe($.postcss([ autoprefixer({ browsers: [ "ie >= 10" ] }), cssnano({ zindex: false }) ]))
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.dest + 'css'))
        .pipe($.connect.reload())

    gulp.src(paths.dest + 'js/app.js')
        .pipe($.uglify())
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.dest + 'js'))
        .pipe($.connect.reload())
})
