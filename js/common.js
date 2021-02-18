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

    $(window).on('scroll',function(){
        var page = $('.page_start');
        var pageOffsetTop = page.offset().top;

        if($(window).scrollTop() > pageOffsetTop){
            $('#header').addClass('on');
        } else{
            $('#header').removeClass('on');
        }

    });


  
});