window.onload = function() {
	//为“用户名”添加验证函数，当失去焦点时调用函数
	var username = document.getElementById("username");	
	username.onblur = checkUsername;
	var speed=15;
		var tab=document.getElementById("content_top");
		var tab1=document.getElementById("picScroll1");
		var tab2=document.getElementById("picScroll2");
		function Marquee(){
			console.log(tab2.offsetWidth-tab.scrollLeft)
			if(tab2.offsetWidth-tab.scrollLeft<=6)
				tab.scrollLeft-=(tab1.offsetWidth);
			else{
				tab.scrollLeft++;
			}
		}
	var MyMar=setInterval(Marquee,speed);
	tab.onmouseover=function() {clearInterval(MyMar)};
	tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
	$('#banner_left a img').hover(function(){
		$('#banner_left div').show();
	},function(){
		$('#banner_left div').hide();
	})
}

function checkUsername() { 
	var username = document.getElementById("username");
	//检验该文本框用户是否已经输入
	if (username.value.length == 0)//username.value==''
	{		
		username.parentNode.innerHTML = username.parentNode.innerHTML+"<span style='color:black'>用户名必须输入</span>";
	}
	if (username.value.length != 11)//username.value==''
	{		
		username.parentNode.innerHTML = username.parentNode.innerHTML+"<span style='color:black'>请输入正确的手机号</span>";
	}
}
