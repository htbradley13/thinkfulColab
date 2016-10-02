$(document).ready(function(){
	$('.menuContainer').hide();
$('.menuBrand').on('click', function(){ //when menu icon is clicked toggle visibility
$(".menuContainer" ).slideToggle( "slow", "linear" ); //jQuery fadeToggle() can also have a fade built in to the toggle for smooth transition
});

$(window).scroll(function(){ //detected if the window is being scrolled
	console.log("scrolled");
	$(".menuContainer").slideUp("slow", "linear"); //if scrolled menu disappears

});

});