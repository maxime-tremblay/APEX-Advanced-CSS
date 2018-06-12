// Page 1000 Specific JS
// Button with sliding icon on hover

var demo = demo || {};

demo.page1000 = {};

(function(curPage, $){
    "use strict";

    curPage.toggleClass = function (){
        var l_className = 't-Button--slideAnim',
            l_toggleItem = 'P1000_TOGGLE',
            l_affectedRegionSel = '.regionActionToggle',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        if (l_toggleValue === 'Y'){
            $(l_affectedRegionSel).addClass(l_className);
        }
        else{
            $(l_affectedRegionSel).removeClass(l_className);
        }
    };
})(demo.page1000, apex.jQuery);
