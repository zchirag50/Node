var gulp= require('gulp'),
    nodemon=require('gulp-nodemon'),
    gulpMocha= require('gulp-mocha'),
    env= require('gulp-env'),
    supertest= require('supertest');

gulp.task('default', function(){
    nodemon({
        script: 'index.js',
        ext :'js',
        env:{
            PORT:8012
        },
        ignore:['./node_module/**']
    })
    .on('restart',function(){
        console.log('restarting');
    })
}
);

gulp.task('test',function(){
    env({vars : {ENV: 'Test'}});
    gulp.src('tests/*.js',{read:false})
        .pipe(gulpMocha({reporter:'nyan'}))

})