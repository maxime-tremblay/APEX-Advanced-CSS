// Page 101 Specific JS
// Navigation Menu Icon

var demo = demo || {};

demo.page2200 = {};

(function(curPage, $){
    "use strict";

    curPage.toggleClass = function (){
        var l_classNameLeft = 'report-icon-left',
            l_classNameRight = 'report-icon-right',
            l_toggleItem = 'P2200_TOGGLE',
            l_affectedRegionSel = '.t-PageBody',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        if (l_toggleValue === 'LEFT'){
            $(l_affectedRegionSel).addClass(l_classNameLeft);
            $(l_affectedRegionSel).removeClass(l_classNameRight);
        }
        else if (l_toggleValue === 'RIGHT'){
            $(l_affectedRegionSel).removeClass(l_classNameLeft);
            $(l_affectedRegionSel).addClass(l_classNameRight);
        }
        else {
            $(l_affectedRegionSel).removeClass(l_classNameLeft);
            $(l_affectedRegionSel).removeClass(l_classNameRight);
        }
    };
})(demo.page2200, apex.jQuery);
