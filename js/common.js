$(function(){

    var win_w = $(window).width();

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
  
});