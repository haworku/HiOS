const gulp = require('gulp');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const path = require('path');

const watch = {
  less: ['style/*.less'],
  js: [ 
        // 'node_modules/animatejs/index.js',
        'node_modules/redux/dist/redux.min.js',
        'node_modules/id3js/id3.min.js',
        // 'js/utils.js',
        'js/redux/store.js',
        // 'js/redux/constants.js',
        // 'js/redux/reducers/player-reducer.js',
        // 'js/redux-view.js',
        // 'js/redux-audio.js',
        // 'js/redux/actions/player-action.js',
        // 'js/redux-app.js',
        // 'js/music-upload.js'
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
      .pipe(autoprefixer({
        browsers: ['> 0%'],
        cascade: true,
      }))
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dist/'))
      .pipe(livereload())
);

gulp.task('dev', () => {
  livereload.listen();
  gulp.watch(watch.less, ['less']);
  gulp.watch(watch.js, ['js']);
});

gulp.task('default', ['dev']);
