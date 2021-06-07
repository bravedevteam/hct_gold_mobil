$(function(){
  $(".topArea_tab a").click(function(e){
    e.preventDefault();
    var tab = $(this).attr("data-role");
    $(this).addClass("active").siblings().removeClass("active");
    $(".tabArea").removeClass("active");
    $("#"+tab).addClass("active");
    $("#"+tab+"_cont").addClass("active");
  });

  $(".open--popup").click(function(e){
    e.preventDefault();
    var target = $(this).attr("data-pop");
    $("#"+target).fadeIn(300);
    dimOpen();
  });

  $(".popupBasic .btn button.close").click(function(){
    $(this).parents(".popupBasic").fadeOut(300);
    dimClose();
  });
});

function dimOpen(){ $("#dim").fadeIn(300); }
function dimClose(){ $("#dim").fadeOut(300); }