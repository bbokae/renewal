$(function(){
	// MAIN SLIDER
	var mainSwiper=new Swiper(".mainSwiper", {
		speed: 1200,
		effect: "fade", 
		fadeEffect: { 
			crossFade: true, 
		},
		autoplay: {
			delay: 5000, 
		},
		pagination: {
			el: ".mainSwiper .swiper-pagination",
		},
		/*
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		*/
	});

	$(".prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$(".next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
	$(".play").click(function(e){
		e.preventDefault();
		mainSwiper.autoplay.start();
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){ 
			$(this).removeAttr("class"); 
			$(this).addClass("pause"); 
			$(this).text("pause"); 
			mainSwiper.autoplay.start(); 
		}
		else{ 
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
		}
	});

	// GNB SLIDER
	var gnbSwiper=new Swiper(".gnbSwiper", {
		pagination: {
			el: ".gnbSwiper .swiper-pagination",
		},
	});
});