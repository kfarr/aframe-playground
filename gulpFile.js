var child_process = require('child_process')
  , gulp = require('gulp')
  , $ = require('gulp-load-plugins')();

var ctx = {
  app: ['+(bin|routes)/**/*.js', 'app.js'],
  child: null // use this to track child process (express)
};

gulp.task('default', ['express', 'watch'], ready);

gulp.task('express', function() {
  
  if(ctx.child) ctx.child.kill();
  var env = Object.create(process.env);
  env.NODE_ENV = env.NODE_ENV || 'development'
  ctx.child = child_process.spawn(process.execPath, ['./app.js'], {
    env: env,
    stdio: ['ipc']
  });
  
  ctx.child.stdout.on('data', function(data) {
    var str = data.toString().trim();
    if(str.match(/\n/)) str = '\n' + str;
    
    $.util.log('[app] ' + $.util.colors.bgCyan($.util.colors.blue(str)));
  });
  
  ctx.child.stderr.on('data', function(data) {
    $.util.log($.util.colors.bgRed($.util.colors.white(data.toString().trim())));
  });
});

gulp.task('watch', function() {
  gulp.watch(ctx.app, ['express'], ready);
});


function ready() {
  $.util.log(
    $.util.colors.bgMagenta(
      $.util.colors.white(
        $.util.colors.bold('[          STATUS: READY          ]')
      )
    )
  );
}