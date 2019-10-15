const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const minify_css = require("gulp-minify-css");

//复制文件
gulp.task("watchall",async ()=>{
    gulp.watch("*.html", async ()=>{
        //把当前目录下的所有html文件拷贝至目录：D:\phpStudy\WWW\myfile\zst
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\Shiseido"));
    })
    gulp.watch("*.scss", async ()=>{
        gulp.src("*.scss")
        .pipe(sass())
        .pipe(gulp.dest("D:\\Shiseido\\css"));
    })
    //拷贝图片
    gulp.watch("img/**/*", async ()=>{
        gulp.src("img/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\Shiseido\\img"));
    })
    //拷贝CSS
    gulp.watch("css/**/*", async ()=>{
        gulp.src("css/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\Shiseido\\css"));
    })
    //拷贝php
    gulp.watch("*.php", async ()=>{
        gulp.src("*.php")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\Shiseido"));
    })
    //拷贝文件夹
    gulp.watch("font/**/*", async ()=>{
        gulp.src("font/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\Shiseido\\font"));
    })
    gulp.watch("font_1439357_1ft72l52bew/**/*", async ()=>{
        gulp.src("font_1439357_1ft72l52bew/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\Shiseido\\font_1439357_1ft72l52bew"));
    })
    //压缩
    gulp.watch('js/*.js', async()=>{
        gulp.src('js/*.js')
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\Shiseido\\js"))
    })

});












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