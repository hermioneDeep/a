function ingmarwp_isotope_custom_js() {
    'use strict';

    var $container = jQuery('#isotope-list').isotope({
        // options...
        itemSelector: '.item',
        percentPosition: true
    });

    // layout Masonry after each image loads
    $container.imagesLoaded(function() {
        $container.isotope();
    });

    //Add the class selected to the item that is clicked, and remove from the others
    var $optionSets = $('#filters'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('#filters');
        $optionSets.find('.selected').removeClass('selected');
        $this.addClass('selected');

        //When an item is clicked, sort the items.
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });

        return false;
    });

};

jQuery(document).ready(function($) {
    'use strict';
    ingmarwp_isotope_custom_js();
});