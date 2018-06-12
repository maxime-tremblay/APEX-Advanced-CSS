// Page 1200 Specific JS
// Cards Flexbox - Display Title Before

var demo = demo || {};

demo.page2600 = {};

(function(curPage, $){
    "use strict";

    curPage.toggleClass = function (){
        var l_className = 'cards--hoverAnimation',
            l_toggleItem = 'P2600_TOGGLE',
            l_affectedRegionSel = '.regionActionToggle',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        if (l_toggleValue === 'Y'){
            $(l_affectedRegionSel).addClass(l_className);
        }
        else{
            $(l_affectedRegionSel).removeClass(l_className);
        }
    };
})(demo.page2600, apex.jQuery);
