var s = WIDGETS.imgSmoothCheck({
    selector: "#select",
    data: ["img/t1.jpg", "img/t2.jpg", "img/t3.jpg"],
    imgHeight: 200,
    imgWidth: 320,
    allowableErrorValue: 3,
    success: function () {
        alert('验证成功');
        $(".widgets__img_check_box").remove();
        $(".contain").css({'height':'1315'});
		//恢复按钮
        $("#btnLogin,#btn").removeAttr('disabled').css({background:'black',color:'white'}).hover(function(){
			$(this).css({background:'white',color:'black'});
		},function(){
			$(this).css({background:'black',color:'white'});
		})
    },

    error: function (res) {
        alert('请重试');
    }
});
$(".refresh").on("click", function () {
    s.refresh();
});
