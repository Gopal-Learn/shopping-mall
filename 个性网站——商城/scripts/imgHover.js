$(function(){
	$("#jnBrandList li").each(function(index){
		var $img = $(this).find("img");
		var img_w = $img.width();
		var img_h = $img.height();
		var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
		 $(spanHtml).hover(function () {  
                    $(this).addClass("imageOver");  
                }, function () {  
                    $(this).removeClass("imageOver");  
                }).appendTo($(this).find("a"));  
	})
	//使用下面的方法不行！改用addClass和removeClass
// 	$("#jnBrandList").delegate(".imageMask","hover",function(){
// 		$(this).toggleClass("imageOver");
// });
});


