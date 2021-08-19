$(function(){
	/* Checkbox */
	$(".areaAllCheck input[type='checkbox']").click(function(){
		if($(this).prop("checked") == false){
			$(this).parents(".boxBasicAgree").find(".item").children("input[type='checkbox']").prop("checked", "");
		}else{
			$(this).parents(".boxBasicAgree").find(".item").children("input[type='checkbox']").prop("checked", "checked");
		}
	});
	
	$(".areaCheck input[type='checkbox']").click(function(){
		var $parents = $(this).parents(".boxBasicAgree");
		var $parent = $(this).parents(".areaCheck");
		var itemLen = $parent.find("input[type='checkbox']").length;
		var checkLen = $parent.find("input[type='checkbox']:checked").length;
		
		if(itemLen == checkLen){
			$parents.find(".areaAllCheck").children("input[type='checkbox']").prop("checked", "checked");
		}else{
			$parents.find(".areaAllCheck").children("input[type='checkbox']").prop("checked", "");
		}
	});
	

	/* Filebox */
	var fileTarget = $('.filebox .uploadHidden');

	fileTarget.on('change', function(){ // 값이 변경되면
		if(window.FileReader){ // modern browser
			var filename = $(this)[0].files[0].name;
		}else{ // old IE
			var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
		} // 추출한 파일명 삽입
		$(this).siblings('.uploadName').val(filename);
	});


	/* Input Radio Tab */
	$(".inputCheckbox label").click(function(e){
		e.preventDefault();

		var $input = $(this).prev("input");
		if($input.prop("checked") == false){
			$input.prop("checked", true);

			if($input.hasClass("checkTab")){
				var target = $input.attr("id");

				console.log(target)
				
				$("#"+target+"_cont").siblings().removeClass("active");
				$("#"+target+"_cont").addClass("active");
			}
		}
	});


	/* tabBasic */
	$(".tabBasic button").click(function(){
		if(!$(this).hasClass("active")){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
		}
	});


	/* Drop Box */
	$(".dropbox--item").slideUp(0);
	$(".btnDropbox").click(function(){
		var target = $(this).attr("data-drop");
		
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$("#"+target).slideUp(300);
		}else{
			$(this).addClass("active");
			$("#"+target).slideDown(300);
		}
	});
	

	/* Popup Layer */
	$(".layer--open").click(function(e){
		e.preventDefault();
		var target = $(this).attr("data-pop");
		if($("#"+target).hasClass("fullLayer")){
			$("#"+target).fadeIn(500);
		}else if($("#"+target).hasClass("bottomLayer") || $("#"+target).hasClass("basicPopup")){
			$("#"+target).addClass("active");
			dim_open();
		}else if($("#"+target).hasClass("voucherMore")){
			$(window).scrollTop(0);
			$("#"+target).addClass("active");
			dim_open();
		}else{
			$("#"+target).addClass("active");
		}
	});

	$(".layer--close").click(function(){
		dim_close();
	});

	$(".popMore a").click(function(){
		dim_close();
	});


	/* Dim */
	$("#dim").click(function(){
		dim_close();
	});
	function dim_open(){
		$("body").css("overflow", "hidden");
		$("#dim").fadeIn(500);
	}
	function dim_close(){
		$("body").css("overflow", "auto");
		$(".fullLayer").fadeOut(500);
		$(".bottomLayer").removeClass("active");
		$(".basicPopup").removeClass("active");
		$(".textLayer").removeClass("active");
		$("#dim").fadeOut(500);
	}


	/* Attach */
	$(".selectAttach").each(function(){
		if($(this).children(".title").hasClass("active")){
			$(".selectAttach .cont").slideDown(0);
		}else{
			$(".selectAttach .cont").slideUp(0);
		}
	});
	
	$(".selectAttach .title").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(".selectAttach .cont").slideUp(300);
		}else{
			$(this).addClass("active");
			$(".selectAttach .cont").slideDown(300);
		}
	});

	$(".select.type--yak select").change(function(){
		var _val = $(this).val();

		$(".boxYak .innerBox").removeClass("active");
		$(".boxYak .innerBox[data-value='"+_val+"']").addClass("active");
	});


	/* Customer */
	$(".listCustomer li .cont").slideUp(0);
	$(".listCustomer li .top").click(function(){
		var target = $(this).parent();
		if(target.hasClass("active")){
			target.removeClass("active");
			target.children(".cont").slideUp(300);
		}else{
			target.siblings().removeClass("active").children(".cont").slideUp(300);
			target.addClass("active");
			target.children(".cont").slideDown(300);
		}
	});

	if($( ".datepicker" ).length){
		$( ".datepicker" ).datepicker({
			dateFormat : "yy.mm.dd"
		});
	}
});

/* Number MaxLength */
function maxLengthCheck(object){
	if (object.value.length > object.maxLength){
		object.value = object.value.slice(0, object.maxLength);
	}    
}