$(function(){
	$(".topArea_tab a").click(function(e){
		e.preventDefault();
		var target = $(this).attr("data-role");
		if(!$(this).hasClass("active")){
			$(this).addClass("active").siblings().removeClass("active");
			$(".tabArea").removeClass("active");
			$("#"+target).addClass("active");
		}
	});
});