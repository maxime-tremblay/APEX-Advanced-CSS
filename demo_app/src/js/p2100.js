// Page 101 Specific JS
// Navigation Menu Icon

var demo = demo || {};

demo.page2100 = {};

(function(curPage, $){
    "use strict";

    curPage.toggleClass = function (){
        var l_classNameClose = 't-Burger--close',
            l_classNameArrow = 't-Burger--arrow',
            l_toggleItem = 'P2100_TOGGLE',
            l_affectedRegionSel = '.t-PageBody',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        if (l_toggleValue === 'ARROW'){
            $(l_affectedRegionSel).removeClass(l_classNameClose);
            $(l_affectedRegionSel).addClass(l_classNameArrow);
        }
        else if (l_toggleValue === 'CLOSE'){
            $(l_affectedRegionSel).addClass(l_classNameClose);
            $(l_affectedRegionSel).removeClass(l_classNameArrow);
        }
        else {
            $(l_affectedRegionSel).removeClass(l_classNameClose);
            $(l_affectedRegionSel).removeClass(l_classNameArrow);
        }
    };
})(demo.page2100, apex.jQuery);
