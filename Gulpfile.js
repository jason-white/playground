var gulp          = require("gulp");
    autoprefixer  = require("gulp-autoprefixer");
    pug           = require("gulp-pug");
    sass          = require("gulp-sass");
    plumber       = require("gulp-plumber");
    sourcemaps    = require("gulp-sourcemaps");


gulp.task("pug", function() {
  gulp.src("./pug/**/*.pug")
    .pipe(plumber())
    .pipe(pug({
      errLogToConsole: true
    }))
    .pipe(gulp.dest("./"));
  });

gulp.task("sass", function() {
  gulp.src("./scss/**/*.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css"))
});

gulp.task("watch", function() {
  gulp.watch("./pug/**/*.pug", ["pug"])
  gulp.watch("./scss/**/*.scss", ["sass"])
})

gulp.task("default", ["pug", "sass", "watch"]);
