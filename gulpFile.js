var gulp       = require('gulp');
var connect    = require('gulp-connect');


//start a local webserver
gulp.task('default', function() {
  connect.server({
    root: ['doc'],
    port: 1338,
    livereload: true
  });
});