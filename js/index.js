"use strict";
var $;
$(function () {
    // 科室导航
    $('#depart .tab').click(function () {
        $('#depart .tab').removeClass('active');
        $(this).addClass('active');
        $('.departList .ulsWrap').hide();
        $('.departList .ulsWrap').eq($(this).index()).show();
    });
    // 新闻
    // $('#newsOne .back').hover(function(){
    //     $('#newsOne .back').removeClass('active');
    //     $(this).addClass('active');
    //     $('.News .left_box .cont').hide();
    //     $('.News .left_box .cont').eq($(this).index()).show()
    // },function(){
    //     $(this).addClass('active');
    // })
    // 信息中心
    $('#newsTwo .back').hover(function(){
        $('#newsTwo .back').removeClass('active');
        $(this).addClass('active');
        $('.right_box .cont').hide();
        $('.right_box .cont').eq($(this).index()).show();
    },function(){
        $(this).addClass('active');
    })
    // 科室导航
    /*
    $('.departList .uls .lis').hover(function () {
        $('.departList .uls .lis').removeClass('active');
        $(this).addClass('active');
        $('.img_wrap').removeClass('active');
        $('.img_wrap').eq($('.departList .uls .lis').index($(this))).addClass('active');
    },function(){
        $(this).addClass('active');
        $('.img_wrap').eq($('.departList .uls .lis').index($(this))).addClass('active');
    });
    */
});
