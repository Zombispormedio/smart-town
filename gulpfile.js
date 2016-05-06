var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');

var path = require('path');

var PUBLIC="public";

var public=function(subpath){
      return !subpath ? PUBLIC : path.join(PUBLIC, subpath);
}


gulp.task("build-js", function() {
    return gulp.src(public("scripts/**/*.js"))
        .pipe($.sourcemaps.init())
        .pipe($.concat("bundle.min.js"))
        .pipe($.uglify())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(public("dist")))
        .pipe($.size({
            title:"js"
        }));
});

gulp.task('vulcanize', function() {
  return gulp.src(public('elements/elements.html'))
    .pipe($.vulcanize({
      stripComments: true,
      inlineCss: true,
      inlineScripts: true
    }))
    .pipe($.minifyHtml({
      quotes: true,
      empty: true,
      spare: true
    }))
    .pipe(gulp.dest(public('dist/elements')))
    .pipe($.size({title: 'vulcanize'}));
});