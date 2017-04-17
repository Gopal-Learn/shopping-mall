$(function(){
	var index = 0;
	var $imgrolls = $("#jnImageroll div a");
	var len = $imgrolls.length;
	var adTimer = null;

	$("#jnImageroll div a").mouseover(function(){
		index = $("#jnImageroll div a").index(this);
		showImg(index);
	}).eq(0).mouseover();

	//滑入停止动画，滑出开始动画
	$("#jnImageroll").hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
			adTimer = setInterval(function(){
				showImg(index);
				index++;
				if(index==len){index=0;}
			},5000);
	}).trigger("mouseover");
})

//显示不同的幻灯片
function showImg(index){
	var $rollobj = $("#jnImageroll");
	var $rolllist = $rollobj.find("div a");
	var newhref = $rolllist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href",newhref)
					.find("img").eq(index).stop(true,true).fadeIn()
					.siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
								.eq(index).addClass("chos").css("opacity","1");
}



