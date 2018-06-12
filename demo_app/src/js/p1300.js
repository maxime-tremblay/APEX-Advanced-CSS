// Page 1300 Specific JS
// Carousel Animation

var demo = demo || {};

demo.page1300 = {};

(function(curPage, $){
    "use strict";

    curPage.toggleClass = function (){
        var l_className = 't-Region--showCarouselProgress',
            l_toggleItem = 'P1300_TOGGLE',
            l_affectedRegionSel = '.regionActionToggle',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        if (l_toggleValue === 'Y'){
            // Add Animation Class
            $(l_affectedRegionSel).addClass(l_className);

            // Navigate to First Slide
            setTimeout(function(){ $('.a-Region-carouselNav .a-Region-carouselLink', l_affectedRegionSel).eq(0).click(); }, 10);
        }
        else{
            $(l_affectedRegionSel).removeClass(l_className);
        }
    };
})(demo.page1300, apex.jQuery);
