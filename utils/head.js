$(function(){
    $('#edition .back_url').click(function () {
        $('#edition .back_url').removeClass('active');
        $(this).addClass('active');
    })
    $('.nav ul li').hover(function(){
        if($(this).find('.content .content_child').length!=0){
            $('.nav .content').hide()
        }
        $(this).children('.content').css({
            'height':0+'px'
        }).show()
        $(this).children('.content').addClass('active');
        var height = $(this).children('.content').children('.content_child').height();
        $(this).children('.content').css({
            'height':height+'px'
        })
    },function(){
        $(this).children('.content').css({
            'height':0+'px'
        })
    })
    $('.nav .lis_p').click(function(){
        $('.nav li .content').css({
            'height':0+'px'
        })
    })
    $('.lis_p').hover(function(){
        $('.lis_p').removeClass('active');
        $(this).addClass('active');
    },function(){
        $('.lis_p').removeClass('active');
    })


    // $('.headerWrap .nav li')
    for(var i=0; i<$('.headerWrap .nav li').length;i++){
        for(var j=0;j<$('.headerWrap .nav li').eq(i).children('.content').length;j++){
            var children = $('.headerWrap .nav li').eq(i).children('.content');
            for(var k=0;k<children.eq(j).find('.newLi').length;k++){
                var flag = children.eq(j).find('.newLi').eq(k).attr('flag');
                //console.log('flag:::',flag)
                if(flag&&flag.indexOf('tv')!=-1){
                    let dom = children.eq(j).find('.newLi').eq(k).find('.hiddenHref');
                    //console.log(dom,'dom')
                    let link = dom.find('a').html();
                    //console.log('link:',link)
                    children.eq(j).find('.newLi').eq(k).one('click',function(){
                        window.open(link);
                    })
                }
            }
        }
    }
    let imgUrl = $('.headerWrap').attr('favicon');
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = imgUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
})
