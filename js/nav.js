$(document).ready(function(){
    var hoverTimer, outTimer;
    $('.li1').hover(function() {
        clearTimeout(outTimer);
        hoverTimer = window.setTimeout(function(){
        $(".box1").show();
        },500);
    }, function() {
        clearTimeout(hoverTimer);
        outTimer = window.setTimeout(function(){
       $(".box1").hide();
        },300);
    });

    $('.box1').hover(function() {
        clearTimeout(outTimer);
        hoverTimer = window.setTimeout(function(){
        $(this).show();
        },500);
    }, function() {
       $(this).hide();
    });
})


$(document).ready(function(){
    var hoverTimer, outTimer;
    $('.li2').hover(function() {
        clearTimeout(outTimer);
        hoverTimer = window.setTimeout(function(){
        $(".box2").show();
        },500);
    }, function() {
        clearTimeout(hoverTimer);
        outTimer = window.setTimeout(function(){
       $(".box2").hide();
        },300);
    });

    $('.box2').hover(function() {
        clearTimeout(outTimer);
        hoverTimer = window.setTimeout(function(){
        $(this).show();
        },500);
    }, function() {
       $(this).hide();
    });
})


$(document).ready(function(){
    var hoverTimer, outTimer;
    $('.li3').hover(function() {
        clearTimeout(outTimer);
        hoverTimer = window.setTimeout(function(){
        $(".box3").show();
        },500);
    }, function() {
        clearTimeout(hoverTimer);
        outTimer = window.setTimeout(function(){
       $(".box3").hide();
        },300);
    });

    $('.box3').hover(function() {
        clearTimeout(outTimer);
        hoverTimer = window.setTimeout(function(){
        $(this).show();
        },500);
    }, function() {
       $(this).hide();
    });
})


$(".li4").hover(function(){
    $(".ul2").show().html(
        `<a href="#">卸妆洁面</a><br>
        <a href="#">化妆水</a><br>
        <a href="#">精华</a><br>
        <a href="#">乳液/面霜</a><br>
        <a href="#">眼唇护理</a><br>
        <a href="#">面膜</a><br>
        <a href="#">防护隔离</a>`
    );
},function(){
    $(".ul2").hide();
})

$(".li5").hover(function(){
    $(".ul2").show().html(
        `<a href="#">强韧肌础</a><br>
        <a href="#">保湿滋润</a><br>
        <a href="#">淡斑亮白</a><br>
        <a href="#">提拉紧致</a><br>
        <a href="#">抚纹抗老</a><br>
        <a href="#">全效修护</a><br>
        <a href="#">初抗老</a><br>
        <a href="#">防护隔离</a><br>`
    )
},function(){
    $(".ul2").hide();
})

$(".li6").hover(function(){
    $(".ul2").show().html(
        `<a href="#">肌源赋活家族</a><br>
        <a href="#">红妍肌活系列</a><br>
        <a href="#">悦薇珀翡系列</a><br>
        <a href="#">新透白美肌系列</a><br>
        <a href="#">时光琉璃御藏系列</a><br>
        <a href="#">百优系列</a><br>
        <a href="#">盼丽风姿系列</a><br>
        <a href="#">红色蜜露</a><br>
        <a href="#">智感赋活系列</a><br>
        <a href="#">青春日和系列</a><br>`
    )
},function(){
    $(".ul2").hide();
})

$(".li7").hover(function(){
    $(".ul2").show().html(
        `<a href="#">唇膏</a><br>
        <a href="#">唇釉</a><br>
        <a href="#">唇线笔</a><br>`
    )
},function(){
    $(".ul2").hide();
})

$(".li8").hover(function(){
    $(".ul2").show().html(
        `<a href="#">遮瑕</a><br>
        <a href="#">气垫</a><br>
        <a href="#">粉底</a><br>
        <a href="#">粉饼</a><br>
        <a href="#">蜜粉</a><br>
        <a href="#">腮红</a><br>
        <a href="#">高光</a><br>`
    )
},function(){
    $(".ul2").hide();
})


$(".li9").hover(function(){
    $(".ul2").show().html(
        `<a href="#">眼影</a><br>
        <a href="#">眼线</a><br>
        <a href="#">睫毛膏</a><br>
        <a href="#">眉笔</a><br>`
    )
},function(){
    $(".ul2").hide();
})

$(".li10").hover(function(){
    $(".ul2").show().html(
        `<a href="#">刷具</a><br>
        <a href="#">其他</a><br>`
    )
},function(){
    $(".ul2").hide();
})


