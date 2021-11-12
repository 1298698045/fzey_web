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
            }else{
                swiper.nextButton.removeClass('next_active');
            }
        }
    });
    // let slideIdx = getUrlParam("slideIdx");
    // swiper.slideTo(slideIdx, 1000, false);
    $('.swiper-wrapper .swiper-slide').click(function(){
        // $('.swiper-wrapper .swiper-slide').removeClass('active');
        // $(this).addClass('active');
        // let value = $(this).html();
        // $('#defaultVal').html(value);
        // $('.container .content').hide()
        // $('.container .content').eq($(this).index()).show()
        if($(this).attr('title')=='检验报告查询'){
            new Pagination({
                element: '#downPages',
                type: 1,
                pageIndex: 1,
                pageSize: 10,
                pageCount: 7,
                total: 100,
                jumper: true,
                singlePageHide: false,
                prevText: '',
                nextText: '',
                disabled: true,
                currentChange: function(index) {
                    console.log(index);
                }
            });
        }
    })
    // 交通路线
    $('#traffic .tabs .tab').click(function(){
        $('#traffic .tabs .tab').removeClass('active');
        $(this).addClass('active');
    })
    // 就医须知
    // $('.row_back').click(function(){
    //     // 重置滚动条
    //     $('.sliderTwo').css('top',0+'px')
    //     $('.right_wrap .rightCont .article').css('top',0+'px');
    //     $('.row_back').removeClass('active');
    //     $('.row_back span').removeClass('active');
    //     $(this).addClass('active');
    //     $(this).children('span').addClass('active');
    //     $('.rightCont').hide();
    //     $(this).parents('.content').find('.rightCont').eq($(this).index()).show();
    // })
})