
(function($, window, document, undefined) {
    'use strict';
			
    // Back to top button

    if ($('#back-to-top , #back-to-home').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top , #back-to-home').addClass('show');
                } else {
                    $('#back-to-top , #back-to-home').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

	// Toggle open and close sidenav
	
	$('.toggle-open-close-right').click(function() {
		$("#ingmarwp-sidenav-right").toggleClass("sidenav-w-right");
    });

    // Add custom classes to predefined targets	
    
    $('.wpcf7-form-control').addClass('border-class');
	$('.form-row select, textarea, input[type=number], input[type=text], input[type=email], input[type=password]').addClass('form-control');
	$('input[type="submit"], .wpcf7 input[type="submit"], .wpcf7 input[type="button"], .wpuf-submit-button').addClass('btn btn-custom btn-lg btn-block');
	$('.updated').addClass('alert alert-success');
	
	// Gallery Lightbox modify arrows

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            leftArrow: '<span><i class="fas fa-angle-left"></i></span>',
            rightArrow: '<span><i class="fas fa-angle-right"></i></span>',
        });
    });
	
    // Full screen search

    $(function() {
        $('a[href="#search"]').on('click', function(event) {
            event.preventDefault();
            $('#search').addClass('open');
            $('#search > form > input[type="search"]').focus();
        });

        $('#search, #search button.close').on('click keyup', function(event) {
            if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                $(this).removeClass('open');
            }
        });
    });		  
			
	// Navbar collapse
	
	$('.navbar-collapse a').click(function(){
	  $(".navbar-collapse").collapse('hide');
	});	
	

})(jQuery, window, document);