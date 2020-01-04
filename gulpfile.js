var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("app/scss/**/*.scss") //Globbing(grabbing) for all scss files
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest("app/css")); //Location to put new compiled css file.
});

gulp.task("watch", function() {
  gulp.watch("app/scss/**/*.scss", gulp.series("sass")); //watches for sass changes. Automatically runs sass task. Must use Gulp series in v.4
  // Other watchers
});
