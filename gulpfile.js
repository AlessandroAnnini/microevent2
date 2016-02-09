var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
  return gulp.src([
      'lib/microevent2.js'
    ])
    .pipe(uglify())
    .pipe(rename('microevent2.min.js'))
		.pipe(gulp.dest('lib'));
});
