$(function(){
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
});