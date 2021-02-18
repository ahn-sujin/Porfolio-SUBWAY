$(function () {

    //변수선언
    var win_w = $(window).width();
    var sec_pos = [];
    var html_tmp = '';
    var last = 0;

    var index = 0;
    var base_line = -300;
    var mvTrue = true;

    let visibilityIds = ['#msg']; //must be an array, could have only one element
    let counterClass = '.counter';
    let defaultSpeed = 3000; //default value

    //위치 값 구하기 함수 
    function save_offset_top() {
        sec_pos = []; //초기화 

        $('section').each(function () {
            var this_offset = $(this).offset().top;
            sec_pos.push(this_offset);
        });

        last = $('section').last().offset().top + $('section').last().height();
        sec_pos.push(last);

    }

    // 페이지 이동 함수1(movepage)
    function move_page() {
        $('html,body').stop().animate({ 'scrollTop': sec_pos[index] }, 1000);
    }

    //페이지 이동 함수2(mousewheel)
    function mouse_wheel_scroll() {
        $(window).on('mousewheel DOMMouseScroll', function (e) {

            e.bubbles == false;
            var evt = e.originalEvent;
            var result;

            result = (evt.wheelDelta) ? -evt.wheelDelta : evt.detail * 40;

            if (mvTrue) {
                mvTrue = false;
                (result > 0) ? index += 1 : index -= 1;
                if (index >= $('section').length) {
                    index = $('section').length;
                } else if (index < 0) {
                    index = 0;
                }
                $('html, body').animate({ 'scrollTop': sec_pos[index] }, 700, function () {
                    mvTrue = true;
                });
            }

        });
    }

    //pagenation 생성 
    $('section').each(function () {
        var page_name = $(this).attr('data-page-name');
        html_tmp += '<a href="#">' + page_name + '</a>';
    });
    $('.pagenation').html(html_tmp);

    //pagenation 이벤트 연결
    $('.pagenation').on('click', 'a', function () {
        index = $(this).index();
        move_page();
    });

    //스크롤 모션 
    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        var page = $('.page_start');
        var pageOffsetTop = page.offset().top;
        

        getVisibilityStatus();

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

    //카운트 모션

    getVisibilityStatus();

    function getVisibilityStatus() {
        elValFromTop = [];
        var windowHeight = $(window).height(),
            windowScrollValFromTop = $(this).scrollTop();

        visibilityIds.forEach(function (item, index) { 
            try { 
                elValFromTop[index] = Math.ceil($(item).offset().top);
            } catch (err) {
                return;
            }
            if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
                counter_init(item);
            }
        });
    }

    function counter_init(groupId) {
        let num, speed, direction, index = 0;
        $(counterClass).each(function () {
            num = $(this).attr('data-TargetNum');
            speed = $(this).attr('data-Speed');
            direction = $(this).attr('data-Direction');
            easing = $(this).attr('data-Easing');
            if (speed == undefined) speed = defaultSpeed;
            $(this).addClass('c_' + index); 
            doCount(num, index, speed, groupId, direction, easing);
            index++;
        });
    }

    function doCount(num, index, speed, groupClass, direction, easing) {
        let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
        if(easing == undefined) easing = "swing";
        $(className).animate({
            num
        }, {
            duration: +speed,
            easing: easing,
            step: function (now) {
                if (direction == 'reverse') {
                    $(this).text(num - Math.floor(now));
                } else {
                    $(this).text(Math.floor(now));
                }
            },
            complete: doCount
        });
    }

    //리사이즈 - 반응형 
    $(window).on('resize', function () {
        win_w = $(this).width();

        if (win_w >= 1200) {
            mouse_wheel_scroll();
        } else {
            $(window).off('mousewheel DOMMouseScroll')
        }

    });

    //최초 실행 - 함수 호출 
    save_offset_top();

    //강제 이벤트 실행
    $(window).trigger('resize');






/*-------visual--------------------------------------*/
    var mySwiper = new Swiper('#visual .left.swiper-container', {
        direction: 'vertical',
        navigation: {
            nextEl: '#visual .swiper-button-next',
            prevEl: '#visual .swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
        },

    });

    var mySwiper = new Swiper('#visual .right.swiper-container', {

        navigation: {
            nextEl: '#visual .swiper-button-next',
            prevEl: '#visual .swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
        },

    });

    var mySwiper = new Swiper('#visual .center.swiper-container', {
        effect: 'fade',
        pagination: {
            el: '#visual .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '#visual .swiper-button-next',
            prevEl: '#visual .swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
        },

    });





/*-------menu--------------------------------------*/
    $('#menu .box').on('mouseenter', function () {
        $(this).addClass('on');
    });

    $('#menu .box').on('mouseleave', function () {
        $(this).removeClass('on');
    });

    //탭메뉴
    $('.icon_menu>li').on('click', function (e) {
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
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,

        navigation: {
            nextEl: '#news .swiper-button-next',
            prevEl: '#news .swiper-button-prev',
        },

        autoplay: {
            delay: 2000,
        },

        breakpoints: {

            480: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup: 1,
            },

            640: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            },

            768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            },

            980: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            },

            1200: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 1,
            },
        }
    });


/*-------franchisee--------------------------------------*/
    $('#franchisee .store').on('mouseenter', function () {
        $(this).addClass('on');
        $(this).siblings().addClass('on');
    });
    $('#franchisee .store').on('mouseleave', function () {
        $(this).removeClass('on');
        $(this).siblings().removeClass('on');
    });

 







});