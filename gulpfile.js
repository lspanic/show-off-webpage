var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

/* 
We pass in the path to the files we want to watch, and then pass in an array with the tasks 
that we want to run when the files are changed. The great thing about this task is since we have called 
this task ‘default’, we can just run gulp when we want to run gulp,
 no need to specify a task! And it will now just sit and wait for files to be saved and then run our task!
*/


/* namjestiti jos automatski refresh page  &  image loseless compression */