$(function(){
    /*let name = getUrlParam("name");
    $('#defaultVal').html(name);
    $('.tabs .tab p').removeClass('active');
    $('.tabs .tab p[title="'+name+'"]').addClass('active');
    var index = $('.tabs .tab p[title="'+name+'"]').parent().index();
    $('.content_wrap').hide().eq(index).show()
    let searchVal = getUrlParam('searchVal');
    $('.keyword').html(searchVal);
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
        $('.tabs .tab').children().removeClass('active');
        $(this).children().addClass('active');
        let value = $(this).children().html();
        $('#defaultVal').html(value);
        $('.content_wrap').hide();
        let index = $(this).index();
        $('.content_wrap').eq(index).show();
    })
    $('#news .box').click(function(){
        window.location.href = '../journalism/detail.html?index='+6+'&id='+'d_xwzx';
    })
    $('#memorabiliaId .box').click(function(){
        window.location.href = '/page/commen/detail.html?index=-1'
    })*/
    $('#news .box').hover(function () {
        $('#news .box').removeClass('active');
        $('#news .box .desc_wrap').children('.title').removeClass('active');
        $(this).addClass('active');
        $(this).children('.desc_wrap').children('.title').addClass('active');
    },function(){
        $('#news .box').removeClass('active');
        $('#news .box .desc_wrap').children('.title').removeClass('active');
    });
    /*
    // 医师介绍
    let ysjsStr = '';
    for(let i=0; i < 6; i++){
        ysjsStr += '<div class="swiper-slide ">'+
        '                            <div class="box">'+
        '                                <div class="block">'+
        '                                    <div class="hover">'+
        '                                        <div class="box_child">'+
        '                                            <div class="pad">'+
        '                                                <div class="img">'+
        '                                                    <img src="/images/avatar1_1.png" alt="">'+
        '                                                </div>'+
        '                                                <p class="name">王晞星</p>'+
        '                                                <p class="position">肿瘤病专家</p>'+
        '                                            </div>'+
        '                                        </div>'+
        '                                        <div class="box_active_wrap">'+
        '                                            <div class="box_active">'+
        '                                                <div class="descWrap">'+
        '                                                    <!-- <p class="title">王晞星，主任医师</p> -->'+
        '                                                    <p class="text">'+
        '                                                        王晞星，主任医师，教授，博/硕士研究生导师，国贴专家，山西名医，全国中医药专家学术经验继承导师，山西省中医院院长，重点专科带头人。'+
        '                                                    </p>'+
        '                                                    <p class="title">擅长：</p>'+
        '                                                    <p class="text">'+
        '                                                        中西医结合治疗肺癌、胃癌、食管癌、结直肠癌、肾癌等；对消化道疾病有独到的治疗方法'+
        '                                                    </p>'+
        '                                                    <!-- <p class="title">出诊时间：</p>'+
        '                                                    <p class="text">'+
        '                                                        每周二、周四、周五上午..'+
        '                                                    </p> -->'+
        '                                                </div>'+
        '                                            </div>'+
        '                                        </div>'+
        '                                    </div>'+
        '                                    <div class="back_bord">'+
        '                                        <div class="back">'+
        '                                            内综肿瘤科'+
        '                                        </div>'+
        '                                    </div>'+
        '                                    <div class="back_row">'+
        '                                        <div class="cel_o">挂号</div>'+
        '                                        <div class="cel_t">问诊</div>'+
        '                                    </div>'+
        '                                </div>'+
        '                            </div>'+
        '                        </div>';

    }
    $('.headPhoto').html(ysjsStr);
    
    var mySwiper1 = new Swiper('.swiper-container', {
        slidesPerView: 6,
        slidesPerView : 6,
        spaceBetween: 18,
        loop: true,
        autoplay: 2000,
        sidesPerView: 'auto',
        loopedSlides: 50
    }); 
    mySwiper1.container[0].onmouseover=function() {
        mySwiper1.stopAutoplay();
    }
    // 鼠标移出开始自动滚动
    mySwiper1.container[0].onmouseout=function() {
        mySwiper1.startAutoplay();
    }
    $('.headPhoto .hover').click(function(){
        window.location.href = '/page/department/doctorDetail.html?index=3'+'&id='+'d_ksdh';
    })
    $('.headPhoto .back_bord').click(function(){
        window.location.href = '/page/department/detail.html?index=3'+'&id='+'d_ksdh';
    })*/
    // 挂号
    $('.headPhoto .cel_o').click(function(){
        window.location.href = '/page/department/doctorDetail.html?id='+'d_ksdh'+'&childId='+'info'
    });
    // let str = $('.content .lCont .box').eq(0).find('.title').html();
    function highlight() {
        var searchVal = $('.keyword').html();
        var boxs = $('.content .lCont .box');
        for(let i=0; i<boxs.length; i++){
            let str = boxs.eq(i).find('.title').html();
            let descStr = boxs.eq(i).find('.desc').html();
            if(str.indexOf(searchVal)!=-1){
                str = str.replace(searchVal,`<span class="resultRed">${searchVal}</span>`)
                boxs.eq(i).find('.title').html(str)
            }
            if(descStr.indexOf(searchVal)!=-1){
                descStr = descStr.replace(searchVal,`<span class="resultRed">${searchVal}</span>`)
                boxs.eq(i).find('.desc').html(descStr)
            }
        }
    }
    highlight();
})
/*
new Pagination({
    element: '#pages',
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
$('#memorabiliaId .box').click(function(){
    window.location.href = '/page/characteristic/detail.html?index=2'+'&id=d_xwzx';
})
$('#videoId .box').click(function(){
    window.location.href = '/page/hospitalSurvey/videoDetail.html?index=5';
})*/