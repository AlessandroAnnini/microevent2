const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('default', function() {
  return gulp.src([
      'lib/microevent2.js'
    ])
    .pipe(babel({
			presets: ['es2015']
		}))
    .pipe(uglify())
    .pipe(rename('microevent2.min.js'))
		.pipe(gulp.dest('lib'));
});
