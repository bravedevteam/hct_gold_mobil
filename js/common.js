$(document).ready(function(){
	// 헤더 스크롤 이벤트
	window.onscroll = function(){
		if($(document).scrollTop() > 1){
			$("#header").addClass("scroll");
		}else{
			$("#header").removeClass("scroll");
		}
    }
});