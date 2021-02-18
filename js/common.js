$(function(){

    //변수선언
    var win_w = $(window).width();
    var sec_pos = [];
    var base_line = -300;


    /*-------gnb--------------------------------------*/
    $('#gnb>li').on('mouseenter', function () {
        if (win_w >= 980) {
            $(this).children('.submenu').stop(true, true).show();
        } else {
            $('#gnb>li>a').off('click');
            $('#gnb>li>a').on('click',function(){
                $('.submenu').stop().slideUp();
                $(this).next('.submenu').stop().slideToggle();
            });
        }
    });

    $('#gnb>li').on('mouseleave', function () {
        if (win_w >= 980) {
            $(this).children('.submenu').stop(true, true).hide();
        }
    });

    $('#header .bar').on('click',function(){
        $(this).addClass('on');
        $('.gnb_wrap').addClass('on');
        $('.cancle').addClass('on');
        $('.m_logo').addClass('on');   
    });

    $('#header .cancle').on('click',function(){
        $(this).removeClass('on');
        $('.gnb_wrap').removeClass('on');
        $('.bar').removeClass('on');
        $('.m_logo').removeClass('on'); 
        
    });

    //스크롤 모션 
    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        var page = $('.page_start');
        var pageOffsetTop = page.offset().top;
        
        $('section').each(function (num) {
            if (scroll >= sec_pos[num] + base_line && scroll < sec_pos[num + 1]) {
                $('section').eq(num).addClass('on');
                $('.pagenation').children('a').removeClass('on').eq(num).addClass('on');
            }
        });

        if($(window).scrollTop() > pageOffsetTop){
            $('#header').addClass('on');
        } else{
            $('#header').removeClass('on');
        }
    
    });
  
});