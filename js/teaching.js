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

    /*$('.tabs .tab').click(function(){
        $('.tabs .tab').children().removeClass('active');
        $(this).children().addClass('active');
        let value = $(this).children().html();
        $('#defaultVal').html(value);
        $('.container .content').hide();
        let index = $(this).index();
        $('.container .content').eq(index).show();
        if(index==2||index==3){
            $('#pages').hide();
        }else {
            $('#pages').show();
        }
    })*/
})
// new Pagination({
//     element: '#pages',
//     type: 1,
//     pageIndex: 1,
//     pageSize: 10,
//     pageCount: 5,
//     total: 100,
//     jumper: true,
//     singlePageHide: false,
//     prevText: '',
//     nextText: '',
//     disabled: true,
//     currentChange: function(index) {
//         console.log(index);
//     }
// });
