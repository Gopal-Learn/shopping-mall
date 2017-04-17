$(function(){
	var x = 10;
	var y = 20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle = this.title;//取得title的值
		this.title = "";
		var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";
		$("body").append(tooltip);//把div元素加入到body中
		$("#tooltip")
				.css({
					"top":(e.pageY+y)+"px",
					"left":(e.pageX+x)+"px"
				}).show("fast");//设置x坐标和y坐标
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip")
				.css({
					"top":(e.pageY+y)+"px",
					"left":(e.pageX+x)+"px"
				});
	});
})