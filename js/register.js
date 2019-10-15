var s = WIDGETS.imgSmoothCheck({
    selector: "#select",
    data: ["img/t1.jpg", "img/t2.jpg", "img/t3.jpg"],
    imgHeight: 200,
    imgWidth: 320,
    allowableErrorValue: 3,
    success: function () {
        alert('验证成功');
        $(".widgets__img_check_box").remove();
        $(".contain").css({'height':'1315'})
    },

    error: function (res) {
        alert('请重试');
    }
});
$(".refresh").on("click", function () {
    s.refresh();
});