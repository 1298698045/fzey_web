$(function(){
    let name = getUrlParam("name");
    $('#defaultVal').html(name);
    $('.tabs .tab p').removeClass('active');
    $('.tabs .tab p[title="'+name+'"]').addClass('active');
    var index = $('.tabs .tab p[title="'+name+'"]').parent().index();
    $('.content_wrap').hide().eq(index).show()
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

    $('.tabs .tab').click(function(){
        if($(this).index()==0){
            window.location.href = prefix + '/page/chineseMedicine/index.html?index=10';
        }else {
            $('.tabs .tab').children().removeClass('active');
            $(this).children().addClass('active');
            let value = $(this).children().html();
            $('#defaultVal').html(value);
            $('.content_wrap').hide();
            let index = $(this).index();
            $('.content_wrap').eq(index).show();
        }
    })
})
let str = '';
for(let i=0; i < 9; i++){
    str += '<div class="box">'+
'                    <div class="box_child">'+
'                        <div class="img">'+
'                            <div class="timeBox">'+
'                                <p class="time">04</p>'+
'                                <p class="year">2020-12</p>'+
'                            </div>'+
'                        </div>'+
'                        <div class="textWrap">'+
'                            <p class="text">'+
'                                山西省中医院党委召开巡视工作部署会...'+
'                            </p>'+
'                        </div>'+
'                    </div>'+
'                </div>';
}
$('#memorabiliaId').append(str);
let videoStr = '';
for(let i=0; i < 9; i++){
    videoStr += '<div class="box">'+
'                    <div class="box_child">'+
'                        <div class="img">'+
'                            <p class="play_icon"></p>'+
'                        </div>'+
'                        <div class="textWrap">'+
'                            <p class="text">'+
'                                大爱无言惠苍生'+
'                            </p>'+
'                        </div>'+
'                    </div>'+
'                </div>';
}
$('#videoId').append(videoStr);
new Pagination({
    element: '#pageThree',
    type: 1,
    pageIndex: 1,
    pageSize: 10,
    pageCount: 5,
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
new Pagination({
    element: '#videoPages',
    type: 1,
    pageIndex: 1,
    pageSize: 10,
    pageCount: 5,
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