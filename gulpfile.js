const gulp = require('gulp');
const run = require('gulp-run');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const less = require('gulp-less');
const path = require('path');

const watch = {
  less: ['style/*.less'],
  js: ['js/music.js',
        'js/player.js',
        'js/view.js',
        ],
};

gulp.task('js', () =>
  gulp.src(watch.js)
      .pipe(concat('script.js'))
      .pipe(gulp.dest('dist/'))
      .pipe(livereload())
);

gulp.task('less', () =>
  gulp.src(watch.less)
      .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')],
      }))
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dist/'))
      .pipe(livereload())
);

gulp.task('dev', () => {
  livereload.listen();
  run('node app.js').exec();
  gulp.watch(watch.less, ['less']);
  gulp.watch(watch.js, ['js']);
});

gulp.task('default', ['dev']);
