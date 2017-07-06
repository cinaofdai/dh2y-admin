// 获取url中的搜索参数

/*yumao add**通过ajax动态获取用户客户端ip地址*/
var cookieStr = document.cookie;
var localhostIp;
var localhostIpType;
var localhostIpAddress;
var cookieArr = cookieStr.split(";");
for(var i=0;i<cookieArr.length;i++){
	var temp = cookieArr[i].split("=");
	if(temp[0].match(/localhostIpType/)){
		 localhostIpType = temp[1];
	}else if(temp[0].match(/localhostIpAddress/)){
		localhostIpAddress = temp[1];
	}else if(temp[0].match(/localhostIp/)){
		localhostIp = temp[1];
	}
}

if(localhostIp && localhostIpType && localhostIpAddress){
	$(".dongIpInfo").html("您的IP是："+localhostIp);
	$(".clientIp").html("您的IP是："+decodeURI(localhostIpAddress)+decodeURI(localhostIpType)+"["+localhostIp+"]");
}else{
$.ajax({
		url:$CONFIG['siteDynamicUrl']+"/ip/search",
		dataType:'jsonp', 
		type:"get",
		jsonp:'callback',
		success:function(returnInfo){
			// 把获取到的ip显示出来
			$(".dongIpInfo").html("您的IP是："+returnInfo['ip']);
			$(".clientIp").html("您的IP是："+returnInfo['country']+returnInfo['area']+"["+returnInfo['ip']+"]");
		}
	})
}
/***/
/***yumao add****/

$(function(){
	// 获取焦点清空内容
	$("#searchkey").focus(function(){
		if($("#searchkey").val() == '输入您需要的查询工具'){
		$("#searchkey").val("");
		}
	})
	
	// 失去焦点判断用户有没有输入内容
	$("#searchkey").blur(function(){
		if(!$("#searchkey").val()){
			$("#searchkey").val('输入您需要的查询工具');
		}
	})
	// 解析searchTools变量
	// alert(searchTools[0]['id']);
	
	// 点击搜索按钮后触发的事件
	$("#Button2").click(function(){
		
		// 获取用户输入的内容
		var inputInfo = $("#searchkey").val();
		if(!inputInfo || inputInfo == '输入您需要的查询工具'){
			alert('请输入搜索的工具');
		}else{
			var url = $CONFIG['siteUrl']+"/search/?searchInfo="+inputInfo;
			window.open(url);
		}
	
	})
	
	// 回车事件
	$("#searchkey").keypress(function(event){
	var e = event||window.event;
	if(e.keyCode=="13"){
		// 获取用户输入的内容
		var inputInfo = $("#searchkey").val();
		if(!inputInfo || inputInfo == '输入您需要的查询工具'){
			alert('请输入搜索的工具');
		}else{
			var url = $CONFIG['siteUrl']+"/search/?searchInfo="+inputInfo;
			window.open(url);
		}
	}
	})
})
/*****/
	  //加入收藏
      function AddFavorite(sURL, sTitle) {
		
           // sURL = encodeURI(sURL);
			sURL = $CONFIG['siteUrl']+"/?from=fav";
            try {
                window.external.addFavorite(sURL, sTitle);
            } catch (e) {
                try {
                    window.sidebar.addPanel(sTitle, sURL, "");
                } catch (e) {
					$("#popuplayer").show();
					$("#shoucboxcang").show();
                }
            }
        }
		
		 function AddFavoriteAlert(sURL, sTitle) {
			   // sURL = encodeURI(sURL);
			sURL = $CONFIG['siteUrl']+"/?from=fav";
            try {
                window.external.addFavorite(sURL, sTitle);
            } catch (e) {
                try {
                    window.sidebar.addPanel(sTitle, sURL, "");
                } catch (e) {
					
                }
            }
		 }
        //设为首页
        function SetHome(url) {
            if (document.all) {
                document.body.style.behavior = 'url(#default#homepage)';
                document.body.setHomePage($CONFIG['siteUrl']+"/?from=home");
            } else {
				$("#popuplayer").show();
				$("#shoucboxhome").show();
            }
        }
        //2.搜索文字焦点
        $(document).ready(function(){
	jQuery.focusblur = function(focusid) {
		var focusblurid = $(focusid);
		var defval = focusblurid.val();
		focusblurid.focus(function(){
			var thisval = $(this).val();
			if(thisval==defval){
				$(this).val("");
			}
		});
		focusblurid.blur(function(){
			var thisval = $(this).val();
			if(thisval==""){
				$(this).val(defval);
			}
		});
		
	};	
	$.focusblur("#searchkey");
});

 var   CalendarData=new   Array(20);   
  var   madd=new   Array(12);   
  var   TheDate=new   Date();   
  var   tgString="甲乙丙丁戊己庚辛壬癸";   
  var   dzString="子丑寅卯辰巳午未申酉戌亥";   
  var   numString="一二三四五六七八九十";   
  var   monString="正二三四五六七八九十冬腊";   
  var   weekString="日一二三四五六";   
  var   sx="鼠牛虎兔龙蛇马羊猴鸡狗猪";   
  var   cYear;   
  var   cMonth;   
  var   cDay;   
  var   cHour;   
  var   cDateString;   
  var   DateString;   
  var   Browser=navigator.appName;   
    
  function   init()   
  {     
      CalendarData[0]=0x41A95;   
      CalendarData[1]=0xD4A;   
      CalendarData[2]=0xDA5;   
      CalendarData[3]=0x20B55;   
      CalendarData[4]=0x56A;   
      CalendarData[5]=0x7155B;   
      CalendarData[6]=0x25D;   
      CalendarData[7]=0x92D;   
      CalendarData[8]=0x5192B;   
      CalendarData[9]=0xA95;   
      CalendarData[10]=0xB4A;   
      CalendarData[11]=0x416AA;   
      CalendarData[12]=0xAD5;   
      CalendarData[13]=0x90AB5;   
      CalendarData[14]=0x4BA;   
      CalendarData[15]=0xA5B;   
      CalendarData[16]=0x60A57;   
      CalendarData[17]=0x52B;   
      CalendarData[18]=0xA93;   
      CalendarData[19]=0x40E95;   
      madd[0]=0;   
      madd[1]=31;   
      madd[2]=59;   
      madd[3]=90;   
      madd[4]=120;   
      madd[5]=151;   
      madd[6]=181;   
      madd[7]=212;   
      madd[8]=243;   
      madd[9]=273;   
      madd[10]=304;   
      madd[11]=334;   
    }   
    
  function   GetBit(m,n)   
  {     
        return   (m>>n)&1;   
  }   
  
function   e2c()   
  {       
      var   total,m,n,k;   
      var   isEnd=false;   
      var   tmp=TheDate.getYear();   
      if   (tmp<1900)     tmp+=1900;   
      total=(tmp-2001)*365   
          +Math.floor((tmp-2001)/4)   
          +madd[TheDate.getMonth()]   
          +TheDate.getDate()   
          -23;   
      if   (TheDate.getYear()%4==0&&TheDate.getMonth()>1)   
          total++;   
      for(m=0;;m++)   
      {       
          k=(CalendarData[m]<0xfff)?11:12;   
          for(n=k;n>=0;n--)   
          {   
              if(total<=29+GetBit(CalendarData[m],n))   
              {     
                  isEnd=true;   
                  break;   
              }   
              total=total-29-GetBit(CalendarData[m],n);   
          }   
          if(isEnd)break;   
      }   
      cYear=2001   +   m;   
      cMonth=k-n+1;   
      cDay=total;   
      if(k==12)   
      {   
          if(cMonth==Math.floor(CalendarData[m]/0x10000)+1)   
              cMonth=1-cMonth;   
          if(cMonth>Math.floor(CalendarData[m]/0x10000)+1)   
              cMonth--;   
      }   
      cHour=Math.floor((TheDate.getHours()+3)/2);   
  }   
     

  function   GetcDateString()   
  {   var   tmp="( "+"农历";   
 
      if(cMonth<1)   
      {     
		tmp+="闰";   
		tmp+=monString.charAt(-cMonth-1);   
      }   
      else   
          tmp+=monString.charAt(cMonth-1);   
      tmp+="月";   
      tmp+=(cDay<11)?"初":((cDay<20)?"十":((cDay<30)?"廿":"卅"));   
      if(cDay%10!=0||cDay==10)   
          tmp+=numString.charAt((cDay-1)%10);   
      tmp+=" )";   
      if(cHour==13)tmp   
      cDateString=tmp;   
      return   tmp;   
  }   
   
  function   GetDateString()   
  {     
      var   tmp="";   
      var   t1=TheDate.getYear();   
      if   (t1<1900)t1+=1900;   
      			tmp+=
                +(TheDate.getMonth()+1)+"月"   
                +TheDate.getDate()+"日   "   
                +"   星期"+weekString.charAt(TheDate.getDay())
				 
      			DateString=tmp;   
      			return   tmp;   
  }
  function miao(){
	   			+" "+TheDate.getHours()+":"   
                +((TheDate.getMinutes()<10)?"0":"")   
                +TheDate.getMinutes()    
	   }
   function getNowDate(){
	  init();   
	  e2c();   
	  GetDateString();   
	  GetcDateString();   
	  return DateString+" "+cDateString+" "+TheDate.getHours()+":"+((TheDate.getMinutes()<10)?"0":"")+TheDate.getMinutes() ;
   }
   //返回顶部
   function b(){
	h = $(window).height();
	l  = $(document).scrollTop();
	if(l >50){
		$('#gotop').show();
	}
	else{
		$('#gotop').hide();
	}
}

$(document).ready(function(e) {
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	})
});
$(window).scroll(function(e){
	b();		
})

  // 隔行换色
    $(function(){
	    $(".demok ul li").mouseover(function(){
		    $(this).addClass("demoOver");
	    })
	    .mouseout(function(){
		    $(this).removeClass("demoOver");
	    })
	    $(".demok ul li:even").addClass("demoBg");
    })
    //鼠标换图动作
                  function mouseOver()
                       {   document.b1.src ="/Static/home/images/back.png"   }
                       function mouseOut()   {
                       document.b1.src ="/Static/home/images/back_hover.png"   
                       }
		 function switchTaba(n){
            for(var i = 1; i <= 2; i++){
                document.getElementById("taba_" + i).className = "";
                document.getElementById("tab_cona_" + i).style.display = "none";
            }
            document.getElementById("taba_" + n).className = "on";
            document.getElementById("tab_cona_" + n).style.display = "block";
        }
//万年日历
/*获取时间*/
var time1=null;
function getT(){
	clearTimeout(time1);
var d = new Date()
var h = d.getHours(); 
var m = d.getMinutes(); 
var se = d.getSeconds(); 
var stime=(h<10 ? "0"+ h : h)+":"+(m<10 ? "0" + m : m)+":"+(se<10 ? "0" +se : se);

var time1=setTimeout("getT()",1000)
}
getT();
/*切换js*/
$('.change').click(function(){
_init_area();
	$('.set-city').show();
	$('.page').hide();
	$('#div_dayonhistory').hide();
	})
$('.cancel').click(function(){
	$('.set-city').hide();
	$('.page').show();
	$('#div_dayonhistory').show();
	return false;
	})		
// 交通频道页面来限制提交
function tijiao(){
	var dizhi = $("#dizhi").val();
	if(!dizhi || dizhi=="请输入要查找的地址"){
		alert("对不起，输入的地址不能为空！");
		return false;
	}
}
//内容右下角浮动广告
//var ad_timer;
function close_ad(){
	$("#right_fix_ad").remove();
//	clearTimeout(ad_timer);
//	ad_timer = setTimeout("show_ad('http://img.haolexiang.com/uploads/gg/iframe/taobao_300_250_img.html')", 30000);
	return false;
}

function show_ad(ad_url){
	/*var divNow = $('<div id="right_fix_ad" style="z-index:100000;position:absolute;bottom:0;right:0px;position:fixed;"><a target="_self" style="display:block;padding:0 5px;position:absolute;bottom:250px;right:0px;cursor:pointer;" href="javascript:void(0)" onclick="close_ad()"><img src="http://s.haolexiang.com/images/gb.gif"></a><iframe src="'+ad_url+'" frameborder="0"  scrolling="no" width="300" height="250"></iframe></div>');
	$("body").append(divNow);*/
//	clearTimeout(ad_timer);
//	ad_timer = setTimeout("close_ad()",30000);
}

var ad_url="http://img.haolexiang.com/uploads/gg/iframe/google_300_250_img.html";
show_ad(ad_url);