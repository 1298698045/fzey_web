$(function(){
    function getUrlParam(key) {
        // 获取参数
        var url = window.location.search;
        // 正则筛选地址栏
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        // 匹配目标参数
        var result = url.substr(1).match(reg);
        //返回参数值
        return result ? decodeURIComponent(result[2]) : null;
    }
    
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.right_icon',
        prevButton: '.left_icon',
        onSlideChangeEnd: function(swiper){
            if(swiper.isBeginning){
                swiper.prevButton.removeClass('prev_active');
            }else{
                swiper.prevButton.addClass('prev_active');
            }
            if(swiper.isEnd){
                swiper.nextButton.addClass('next_active');
                $('#swiperId').css('transition-duration','0ms')
                $('#swiperId').addClass('swiperId')
                var X = $('#swiperId').css('transform').replace(/[^0-9\-,]/g,'').split(',')[4]-40
                $('#swiperId').css('transform','translate3d('+X+'px,0px,0px)')
                setTimeout(function(){
                    $('#swiperId').removeClass('swiperId')
                },150);
            }else{
                swiper.nextButton.removeClass('next_active');
            }
        }
    });
    // let slideIdx = getUrlParam("slideIdx");
    // swiper.slideTo(slideIdx, 1000, false);
    $('#tab_child p').click(function(){
        $('#tab_child p').removeClass('active');
        $(this).addClass('active');
        $('#visitInfo .blockWrap').hide();
        $('#visitInfo .blockWrap').eq($(this).index()).show();
        let idx = $(this).index();
    })
})
