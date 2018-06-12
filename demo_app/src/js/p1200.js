// Page 1200 Specific JS
// Cards Flexbox - Display Title Before

var demo = demo || {};

demo.page1200 = {};

(function(curPage, $){
    "use strict";

    curPage.toggleClass = function (){
        var l_className = 'cards--title-first',
            l_toggleItem = 'P1200_TOGGLE',
            l_affectedRegionSel = '.regionActionToggle',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        if (l_toggleValue === 'Y'){
            $(l_affectedRegionSel).addClass(l_className);
        }
        else{
            $(l_affectedRegionSel).removeClass(l_className);
        }
    };
})(demo.page1200, apex.jQuery);
