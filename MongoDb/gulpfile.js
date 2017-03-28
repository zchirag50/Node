var gulp= require('gulp'),
    nodemon=require('gulp-nodemon');

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