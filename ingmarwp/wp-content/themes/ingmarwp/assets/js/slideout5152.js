jQuery(document).ready(function($){

// Slideout for prev-next posts
	
	$(window).scroll(function () {
    if ($(document).scrollTop() >= $(document).height() / 4) $("#slideout").show("slow");
    else $("#slideout").hide("slow");
	});
	
	window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.parentNode
        .removeChild(this.parentNode.parentNode);
        return false;
		};
	};
	
});