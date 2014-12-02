/* Creates an animation to return to top*/
$(".go-top a").click(function(){	
	$("html, body").animate( { scrollTop:0 }, 600);
	return false;
});

/*Initialize the plugin WOW*/
new WOW().init();