    //时间滚动效果
     var box = document.getElementById("div_gongao"),
        can = true;
        box.innerHTML += box.innerHTML;
        box.onmouseover = function() {
            can = false
        };
        box.onmouseout = function() {
            can = true
        };
        new
        function() {
            var stop = box.scrollTop % 30 == 0 && !can;
            if (!stop) box.scrollTop == parseInt(box.scrollHeight / 2) ? box.scrollTop = 0 : box.scrollTop++;
            setTimeout(arguments.callee, box.scrollTop % 30 ? 1 : 3000);
        };
		
		 //飞机票切换js
        var $myli1=$(".jipiao_ul>li");
		var $myli2=$(".jiudian_ul>li");
							$myli1.click(function(){
								var nIndex=$myli1.index(this);
								$myli1.removeClass('active');
								$('.tejia1>ul').hide();
								$(this).addClass('active');
								$('.tejia1>ul').eq(nIndex).show();
							})
							$myli2.click(function(){
								var nIndex2=$myli2.index(this);
								$myli2.removeClass('active');
								$('.jiudian>ul').hide();
								$(this).addClass('active');
								$('.jiudian>ul').eq(nIndex2).show();
							})
		//切换js
        $(function () {
            function tabs(tabTit, on, tabCon) {
                $(tabCon).each(function () {
                    $(this).children().eq(0).show();
                });
                $(tabTit).each(function () {
                    $(this).children().eq(0).addClass(on);
                });
                $(tabTit).children().hover(function () {
                    $(this).addClass(on).siblings().removeClass(on);
                    var index = $(tabTit).children().index(this);
                    $(tabCon).children().eq(index).show().siblings().hide();
                });
            }          
            tabs(".car_shur>ul", "active", ".car_box");//汽车标志大全切换
        });
		
		//点击切换js
        $(function () {
            function tabs(tabTit, on, tabCon) {
                $(tabCon).each(function () {
                    $(this).children().eq(0).show();
                });
                $(tabTit).each(function () {
                    $(this).children().eq(0).addClass(on);
                });
                $(tabTit).children().click(function () {
                    $(this).addClass(on).siblings().removeClass(on);
                    var index = $(tabTit).children().index(this);
                    $(tabCon).children().eq(index).show().siblings().hide();
                });
            }          
			tabs(".bus_hd", "on", ".bus_bd");//公交查询
			tabs("#js_time_tab>font", "current", "#xingzuo_box");//公交查询
			tabs("#js_time_tab>font", "current", "#js_time_tab>p");//星座
        });
		
		
		//切换js			
		$(function () {
            function tabs(tabTit, on, tabCon) {
                $(tabTit).click(function () {
					$(tabTit).removeClass(on);
                    $(this).addClass(on);
                    var index = $(tabTit).index(this);
					$(tabCon).hide();
                    $(tabCon).eq(index).show();
                });
            }          
            tabs(".dream_rlist>li>h6", "current", ".dream_rlist>li>.dream_rtxt");//汽车标志大全切换
        });		