// 回车提交表单函数。 
function enterSubmit(divId, formId){
	$("#" + divId).keypress(function(event){
		var e = event||window.event;
		if(e.keyCode=="13"){
			$('#' + formId).submit();
		}
	})
}

function getCookie(objName)
{//获取指定名称的cookie的值
	var arrStr = document.cookie.split("; ");
	for(var i = 0;i < arrStr.length;i ++){
	var temp = arrStr[i].split("=");
	if(temp[0] == objName) return unescape(temp[1]);
	} 
}
function addCookie(objName,objValue,objHours)
{	//添加cookie
	var dongtaiUrl = $CONFIG['siteDynamicUrl'].replace("http://","");
	var jingtaiUrl = $CONFIG['siteUrl'].replace("http://","");
	var str = objName + "=" + escape(objValue);
	if(objHours > 0){ //为0时不设定过期时间，浏览器关闭时cookie自动消失
	var date = new Date();
	var ms = objHours*3600*1000;
	date.setTime(date.getTime() + ms);
	str += "; expires=" + date.toGMTString();
	}
	str += "; path=/";
	document.cookie = str;
	var str = objName + "=" + escape(objValue);
	if(objHours > 0){ //为0时不设定过期时间，浏览器关闭时cookie自动消失
	var date = new Date();
	var ms = objHours*3600*1000;
	date.setTime(date.getTime() + ms);
	
	str += "; expires=" + date.toGMTString();
	
	}
	str += "; path=/; domain="+dongtaiUrl;
	document.cookie = str;
	var str = objName + "=" + escape(objValue);
	if(objHours > 0){ //为0时不设定过期时间，浏览器关闭时cookie自动消失
	var date = new Date();
	var ms = objHours*3600*1000;
	date.setTime(date.getTime() + ms);
	
	str += "; expires=" + date.toGMTString();
	
	}
	str += "; path=/; domain="+jingtaiUrl;
	document.cookie = str;
}


