
'use strict';

import gulp    from 'gulp';
import plugins from 'gulp-load-plugins';

const $     = plugins();
const paths = {
    app    : 'app/',
    assets : 'assets/',
    dest   : 'public/',
};

gulp.task('serve', ['build:dist'], () => {
    $.connect.server({
        name: 'Development',
        port: 3000,
        root: ['./', paths.dest],
        livereload: true
    });

    gulp.watch(paths.app + '**/*.html', ['html']);
    gulp.watch(paths.assets + 'css/**/*.scss', ['styles']);
    gulp.watch(paths.assets + 'js/**/*.js', ['scripts']);
    gulp.watch(paths.assets + 'images/**/*', ['images']);
    gulp.watch(paths.assets + 'libs/**/*', ['libs']);
});

gulp.task('html', () =>
    gulp.src(paths.app + 'index.html')
        .pipe($.fileInclude())
        .pipe(gulp.dest('.'))
        .pipe($.connect.reload())
);

gulp.task('styles', () =>
    gulp.src(paths.assets + 'css/app.scss')
        .pipe($.sass())
        .pipe(gulp.dest(paths.dest + 'css'))
        .pipe($.connect.reload())
);

gulp.task('scripts', () =>
    gulp.src(paths.assets + 'js/**/*.js')
        .pipe(gulp.dest(paths.dest + 'js'))
        .pipe($.connect.reload())
);

gulp.task('images', () =>
    gulp.src(paths.assets + 'images/**/*')
        .pipe(gulp.dest(paths.dest + 'images'))
        .pipe($.connect.reload())
);

gulp.task('libs', () =>
    gulp.src(paths.assets + 'libs/**/**')
        .pipe(gulp.dest(paths.dest + 'libs'))
        .pipe($.connect.reload())
);

gulp.task('fonts', () =>
    gulp.src(paths.assets + 'fonts/*')
        .pipe(gulp.dest(paths.dest + 'fonts'))
);

gulp.task('build:dev',  ['html', 'styles', 'scripts', 'images', 'libs', 'fonts']);
gulp.task('build:dist', ['html', 'styles', 'scripts', 'images', 'libs', 'fonts']);
