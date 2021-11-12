// 交通路线
$('#traffic .tabs .tab').click(function(){
    $('#traffic .tabs .tab').removeClass('active');
    $(this).addClass('active');
    let idx = $(this).index();
    $('.trafficContent').hide();
    $('.trafficContent').eq(idx).show();
})
let hospitalName = getUrlParam("hospitalName");
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
console.log(hospitalName,'hospitalName')
if(hospitalName=='victory'){
    $('#traffic .tabs .tab').removeClass('active');
    $('#traffic .tabs .tab').eq(1).addClass('active');
    $('.trafficContent').hide();
    $('.trafficContent').eq(1).show();
}else if(hospitalName=='peace'){
    $('#traffic .tabs .tab').removeClass('active');
    $('#traffic .tabs .tab').eq(2).addClass('active');
    $('.trafficContent').hide();
    $('.trafficContent').eq(2).show();
}