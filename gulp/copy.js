'use strict';

var path = require('path');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget);

  gulp.task('copy:dist', function(){
    return gulp.src([
      path.join('dist/**/*')
    ])
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest([dest,'scripts'].join('/')));
  })

  // Copy
  gulp.task('copy', function() {
    return gulp.src([
        path.join(dirs.source, '**/*'),
        '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
        '!' + path.join(dirs.source, '**/*.pug')
      ])
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });
};
