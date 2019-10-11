const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");

//复制文件
// gulp.task("watchall",async ()=>{
//     gulp.watch("*.html", async ()=>{
//         //把当前目录下的所有html文件拷贝至目录：D:\phpStudy\WWW\myfile\zst
//         gulp.src("*.html")
//         .pipe(uglify())
//         .pipe(gulp.dest("D:\\phpStudy\\WWW\\Shiseido"));
//     })
    gulp.task("watchall", async ()=>{
         gulp.src("*.sass")
        .pipe(sass())
        .pipe(gulp.dest("css\\css"));
    })
    // gulp.watch("sass/**/*",async ()=>{
        //         gulp.src("sass/**/*")
        //         .pipe(sass())
        //         .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao\\css"));
        //     })
// });



// gulp.task("copyallfile",async ()=>{
//     gulp.src("*/**/*")
// .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao"));
// })

// gulp.task("watchall", async ()=>{
//     gulp.watch("*.html",async ()=>{
//         gulp.src("*.html")
//         .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao"));
//     })
//     gulp.watch("js/*.js",async ()=>{
//         gulp.src("js/*.js")
//         .pipe(babel({presets:[es2015Preset]}))
//         .pipe(uglify())
//         .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao\\js"));
//     })
//     gulp.watch("css/*.css",async ()=>{
//         gulp.src("css/index.css")
//         .pipe(minifycss())
//         .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao\\css"));
//     })
//     gulp.watch("sass/**/*",async ()=>{
//         gulp.src("sass/**/*")
//         .pipe(sass())
//         .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao\\css"));
//     })
//     gulp.watch("images/**/*",async ()=>{
//         gulp.src("images/**/*")
//         .pipe(gulp.dest("E:\\phpStudy\\WWW\\CoolWind\\myTianMao\\images"));
//     })
// })