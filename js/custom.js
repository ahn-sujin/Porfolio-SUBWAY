$(function () {

    var win_w = $(window).width();

    $(window).on('resize',function(){
        win_w = $(this).width();
    });

/*-------gnb--------------------------------------*/    
    $('#gnb>li').on('mouseenter',function(){
        if(win_w >= 980){
            $(this).children('.submenu').stop(true,true).show();
        } else{

        }
    });

    $('#gnb>li').on('mouseleave',function(){
        if(win_w >= 980){
            $(this).children('.submenu').stop(true,true).hide();
        }
    });

/*-------menu--------------------------------------*/        
    $('#menu .box').on('mouseenter',function(){
        $(this).addClass('on');
    });

    $('#menu .box').on('mouseleave',function(){
        $(this).removeClass('on');
    });

    //탭메뉴
    $('.icon_menu>li').on('click',function(e){
        e.preventDefault();
        var i = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $('.pannel>li').eq(i).fadeIn().siblings().fadeOut();
        $('.pannel>li').eq(i).addClass('on').siblings().removeClass('on');
    });

    $('.icon_menu>li').first().trigger('click');

 /*-------news--------------------------------------*/
    var mySwiper = new Swiper('#news .swiper-container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        
        navigation: {
            nextEl: '#news .swiper-button-next',
            prevEl: '#news .swiper-button-prev',
        },
    });


 /*-------franchisee--------------------------------------*/
    $('#franchisee .contry').on('mouseenter',function(){
        $(this).addClass('on');
    });
    $('#franchisee .contry').on('mouseleave',function(){
        $(this).removeClass('on');
        $('#franchisee .store').addClass('on');
    });
    $('#franchisee .store').on('mouseleave',function(){
        $(this).removeClass('on');
        $('#franchisee .contry').addClass('on');
    });




    
    $('#franchisee .contry').trigger('mouseenter');





});