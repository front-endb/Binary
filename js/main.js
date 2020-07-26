//MENU_BURGER
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//IBG
function ibg(){
	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
	$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
	}
ibg();

$(window).resize(function(event){
	mainblock();
});
function mainblock(){
	var h=$(window).outerHeight();
	$(".mainblock").css("min-height",h);
}
mainblock();


//ZOOM
if ($(".gallery").length>0) {
	baguetteBox.run(".gallery",{
		buttons:true,
	});
}
//FILTER
$('.filter__item').click(function(event) {
	var i= $(this).data('filter');
	if (i==1) {
		$(".portfolio__column").show();
	}else {
		$(".portfolio__column").hide();
		$(".portfolio__column.f_"+i).show();
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active');
	return false;
});
//Parolax
$(window).scrollTop(function(event) {
	var s=0-$(this).scrollTop()/1;
	$(".mainblock__bg").css("transform","translate3d(0,'+s+'px,0)");
});