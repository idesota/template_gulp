var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
 
gulp.task("sass", function() {
    gulp.src("assets/sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("assets/css"));
});

gulp.task("js", function() {
    gulp.src(["assets/js/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("assets/jsmin"));
});

gulp.task("default", function() {
    gulp.watch("assets/sass/**/*.scss",["sass"]);
    gulp.watch("assets/js/**/*.js",["js"]);
});

/*
node -v
nvm ls
nvm install 0.11
nvm use 0.11

npm install gulp --save-dev
npm install gulp-sass --save-dev
npm install gulp-autoprefixer --save-dev
npm install gulp-uglify --save-dev
*/