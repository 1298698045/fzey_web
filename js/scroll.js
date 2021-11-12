
function scrollBar(scrollid,textclass,step,margin,type){
    var self = this
    this.scrollid = scrollid
    this.dom = $(scrollid)
    this.textclass = this.dom.find(textclass)
    // console.log(this.dom,this.textclass,'textclass')
    this.init = function(){
        this.createddom()
        this.addstyle()
        this.sethw()
        if(type=='X'){
            this.scrollX()
            this.dragX()
        }else if(type=='Y'){
            // this.scrollY()
            // this.dragY()
        }        
    }
    this.remove = function(){
        if(type=='Y'){
            this.dom.find('.YscrollBar').remove();
        }else if(type=='X'){
            this.dom.find('.XscrollBar').remove();
        } 
    }
    
    this.createddom = function(){
        if(type=='Y'){
            if(this.dom.height()<this.textclass.height()){
                this.dom.find('.YscrollBar').remove()
                this.dom.append(`<div class="YscrollBar">
                    <div class="YsliderWrap">
                        <div class="slider">
                        </div>
                    </div>
                </div>`)
            }
        }else if(type=='X'){
            if(this.dom.width()<this.textclass.width()){
                this.dom.find('.XscrollBar').remove()
                this.dom.append(`<div class="XscrollBar">
                    <div class="XsliderWrap">
                        <div class="slider">
                        </div>
                    </div>
                </div>`)
            }  
        }  

    }
    this.addstyle = function(){
         this.dom.css({
             overflow: 'hidden',
             position: 'relative'
         })
        this.textclass.css({
            overflow: 'hidden',
            position: 'absolute'
        })
    }
    this.sethw = function(){
        if(type=='Y'){
            this.dom.find('.YscrollBar').height(this.dom.height()-margin)
            this.dom.find('.YsliderWrap').height(this.dom.height()-margin)
        }else if(type=='X'){
            this.dom.find('.XscrollBar').width(this.dom.width())
            this.dom.find('.XsliderWrap').width(this.dom.width())
        }          
    }
    this.scrollY = function(){
        //设置滑块的高度 
        //dom.find('.slider').css('height',h1+'px'); 
        //设置y轴的增量 
        var y = 0; 
        //确定每次滚动滚轮右侧滚动条移动的距离
        var ystepnumber = ((this.textclass.height()+margin - this.dom.height())/step)

        console.log(ystepnumber,step)
        var ysteplength = this.dom.find('.YscrollBar').height()/ystepnumber
        if(ystepnumber>0){
            //为wrap添加滚轮事件 
            var wrapDiv = this.dom[0];
            wrapDiv.onmousewheel = function(e){
                e.preventDefault();
                var event1 = event || e 
                if (event.wheelDelta < 0) { 
                    //滑动条向下滚动 
                    y += ysteplength; 
                }else if (event.wheelDelta > 0) { 
                    //滑动条向上滚动 
                    y -= ysteplength; 
                } 
                //y变化时说明在滚动，此时使滚动条发生滚动，以及设置content内容部分滚动 
                //判断极端情况，滑块不能划出屏幕 
                if (y <= 0) { 
                    //滑块最多滑到顶部 
                    y = 0; 
                } 
                if(y >= self.dom.find('.YsliderWrap').height() - self.dom.find('.slider').height()){ 
                    //滑块最多滑到最底部 
                    y = self.dom.find('.YsliderWrap').height() - self.dom.find('.slider').height(); 
                } 
                var scale = y/(self.dom.find('.YsliderWrap').height() - self.dom.find('.slider').height()); 
                // console.log(scale)
                self.dom.find('.slider').css('top',y+'px')
                self.textclass.css('top',-scale*((self.textclass.height()+margin) - self.dom.height())+'px');
            }
        }
    }
    this.dragY = function(){
        // console.log(this.dom.height(),this.textclass.height())
        if(this.dom.height()<this.textclass.height()){
            this.dom.find('.slider').mousedown(function(e){
                var pageX1 = e.pageY - $(this)[0].offsetTop;
                $(document).mousemove(function(e){
                    var pageX2 = e.pageY - pageX1
                    if(pageX2<0){
                        pageX2 = 0
                    }
                    var maxtop = self.dom.height()-margin-27
                    if(pageX2>maxtop){
                        pageX2 = maxtop
                    }
                    self.dom.find('.slider').css({
                        'top':pageX2+'px'
                    });
                    var step =  pageX2/maxtop
                    var length =  (self.textclass.height()-self.dom.height())*step
                    self.textclass.css('top',-length+'px')
                    e.preventDefault()
                    e.returnValue = false
                    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
                    return false
                }).mouseup(function(){
                    $(this).unbind('mousemove')
                })
            })
        }
    }
    this.scrollX = function(){
        var y = 0; 
        var ystepnumber = ((this.textclass.width()+margin - this.dom.width())/step)
        var ysteplength = this.dom.find('.XscrollBar').width()/ystepnumber
        if(ystepnumber>0){
            var wrapDiv = this.dom[0];
            wrapDiv.onmousewheel = function(e){
                e.preventDefault();
                var event1 = event || e 
                if (event.wheelDelta < 0) { 
                    y += ysteplength; 
                }else if (event.wheelDelta > 0) { 
                    y -= ysteplength; 
                } 
                if (y <= 0) {
                    y = 0; 
                } 
                if(y >= self.dom.find('.XsliderWrap').width() - self.dom.find('.slider').width()){ 
                    y = self.dom.find('.XsliderWrap').width() - self.dom.find('.slider').width(); 
                }
                // console.log(y)
                var scale = y/(self.dom.find('.XsliderWrap').width() - self.dom.find('.slider').width());
                self.dom.find('.slider').css('left',y+'px')
                self.textclass.css('left',-scale*((self.textclass.width()+margin) - self.dom.width())+'px');
            }
        }
    }
    this.dragX = function(){
        if(this.dom.width()<this.textclass.width()){
            this.dom.find('.slider').mousedown(function(e){
                var pageX1 = e.pageX - $(this)[0].offsetLeft;
                $(document).mousemove(function(e){
                    var pageX2 = e.pageX - pageX1
                    if(pageX2<0){
                        pageX2 = 0
                    }
                    var maxleft = self.dom.width()-margin-27
                    if(pageX2>maxleft){
                        pageX2 = maxleft
                    }
                    self.dom.find('.slider').css({
                        'left':pageX2+'px'
                    });
                    var step =  pageX2/maxleft
                    var length =  (self.textclass.width()-self.dom.width())*step
                    self.textclass.css('left',-length+'px')
                    e.preventDefault()
                    e.returnValue = false
                    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
                    return false
                }).mouseup(function(){
                    $(this).unbind('mousemove')
                })
            })
        }
    }
}

var myscroll = []
$(document).ready(function(){
    if($('.l_text .row_back').length<10){
        $('.wrap .container .content .NoticeBody .left_wrap .l_text').css('overflow-y','hidden')
    }
    if($('.article .d-visible').height()<=420){
        $('.wrap .container .content .NoticeBody .right_wrap .article').css('overflow-y','hidden')
    }
    let articleId = '';
    let publicStr = getUrlParam('articleid') || ''; // 公共导航传文章id参数用的是articleid
    let aloneStr = getCaption() || ''; // 单独处理文章id参数用的是AID
    if(publicStr!=''){
        articleId = publicStr.substr(0, publicStr.length - 1); 
        console.log('articleId',publicStr)
    }else if(aloneStr !=''){
        articleId = aloneStr;
    }
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
    function getCaption(){
        var obj = window.location.href;
        var index=obj.lastIndexOf("AID");
        obj=obj.substring(index+4,obj.length);
        return obj;
    }
    /* 
        * url 目标url 
        * arg 需要替换的参数名称 
        * arg_val 替换后的参数的值 
        * return url 参数替换后的url 
    */ 
    function changeURLArg(url,arg,arg_val){ 
        var pattern=arg+'=([^&]*)'; 
        var replaceText=arg+'='+arg_val; 
        if(url.match(pattern)){ 
            var tmp='/('+ arg+'=)([^&]*)/gi'; 
            tmp=url.replace(eval(tmp),replaceText); 
            return tmp; 
        }else{ 
            if(url.match('[\?]')){ 
                return url+'&'+replaceText; 
            }else{ 
                return url+'?'+replaceText; 
            } 
        } 
        return url+'\n'+arg+'\n'+arg_val; 
    }
    for(var i=0; i<$('.row_back').length;i++){
        var id = $('.row_back').eq(i).attr('id');
        if(articleId==id){
            $('.row_back').removeClass('active');
            $('.row_back span').removeClass('active');
            $('.row_back').eq(i).addClass('active');
            $('.row_back').eq(i).children('span').addClass('active');
            $('.container .newcontent').find('.rightCont').hide();
            $('.container .newcontent').find('.rightCont').eq(i).show();
        }
    }
    $('.row_back').click(function(){
        $('.row_back').removeClass('active');
        $('.row_back span').removeClass('active');
        $(this).addClass('active');
        $(this).children('span').addClass('active');
        $('.rightCont').hide();
        $(this).parents('.newcontent').find('.rightCont').eq($(this).index()).show();
        var val = $(this).attr('id');
        var idx = $(this).index();
        changeURLArg(location.href,'articleid',val)
        if($('.l_text .row_back').length<10){
            $('.wrap .container .content .NoticeBody .left_wrap .l_text').css('overflow-y','hidden')
        }
        let contHeight = $('.article').eq(idx).find('.d-visible').height(); // 内容的高度
        if(contHeight<=420){
            $('.article').eq(idx).css('overflow-y','hidden');
        }else {
            $('.article').eq(idx).css('overflow-y','scroll');
        }
    })
    $('.row_back').one('click',function(){
        var index = $(this).parents('.NoticeBody').index()
        var index2 = $(this).index()
        // myscroll[index].right[index2].init()
    })
    $('.tabs-item').click(function(){
        $('.sliderTwo').css('top',0+'px')
        $('.right_wrap .rightCont .article').css('top',0+'px');
        $('.container .newcontent').show();
        $('.container .newcontent').find('.rightCont').eq(0).show();
        if($('.l_text .row_back').length<10){
            $('.wrap .container .content .NoticeBody .left_wrap .l_text').css('overflow-y','hidden')
        }
        if($('.article .d-visible').height()<=420){
            $('.wrap .container .content .NoticeBody .right_wrap .article').css('overflow-y','hidden')
        }
        $('.row_back').one('click',function(){
            var index = $(this).parents('.NoticeBody').index()
            var index2 = $(this).index()
            // myscroll[index].right[index2].init()
            let contHeight = $('.article').eq(index2).find('.d-visible').height(); // 内容的高度
            if(contHeight<=420){
                $('.article').eq(index2).css('overflow-y','hidden');
            }else {
                $('.article').eq(index2).css('overflow-y','scroll');
            }
        })
        contentactiveshow($(this).index(),0)
        if($(this).parents('content').length>0){
            // myscroll[$(this).index()].left.init()
            // myscroll[$(this).index()].right[0].init()
        }
    })
    $('.container .newcontent').show()

    var index = $('.tabs-item.active').index()
    var number = $('.row_back.active').index()
    contentactiveshow(index,number)
    // if(myscroll[0].left&&myscroll[0].left!=''){
    //     myscroll[0].left.init()
    //     if(myscroll[0].right!=''){
    //         myscroll[0].right[number].init()
    //     }
    // }
})
function contentactiveshow(index,number){
    $('.row_back').click(function(){
        $('.sliderTwo').css('top',0+'px')
        $('.right_wrap .rightCont .article').css('top',0+'px');
        $('.row_back').removeClass('active');
        $('.row_back span').removeClass('active');
        $(this).addClass('active');
        $(this).children('span').addClass('active');
        $('.rightCont').hide();
        $(this).parents('.newcontent').find('.rightCont').eq($(this).index()).show();
        $('.row_back').one('click',function(){
            var index = $(this).parents('.NoticeBody').index()
            var index2 = $(this).index()
            // myscroll[index].right[index2].init()
            if($('.l_text .row_back').length<10){
                $('.wrap .container .content .NoticeBody .left_wrap .l_text').css('overflow-y','hidden')
            }
            let contHeight = $('.article').eq(index2).find('.d-visible').height(); // 内容的高度
            if(contHeight<=420){
                $('.article').eq(index2).css('overflow-y','hidden');
            }else {
                $('.article').eq(index2).css('overflow-y','scroll');
            }
        })
    })
}