// Page 101 Specific JS
// Navigation Menu Icon

var demo = demo || {};

demo.page2300 = {};

(function(curPage, $){
    "use strict";

    curPage.toggleHeight = function (){
        var l_className = 't-Region--flexContainer',
            l_toggleItem = 'P2300_TOGGLE_HEIGHT',
            l_affectedItem = 'P2300_TOGGLE_ALIGN',
            l_affectedRegionSel = '.regionActionToggle',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        apex.item(l_affectedItem).setValue('NONE');

        if (l_toggleValue === 'Y'){
            $(l_affectedRegionSel).addClass(l_className);
            apex.item(l_affectedItem).show();
        }
        else{
            $(l_affectedRegionSel).removeClass(l_className);
            apex.item(l_affectedItem).hide();
        }
    };

    curPage.toggleAlign = function (){
        var l_className = 't-Region--flexBody',
            l_flexClass = ['t-Region--justifyStart','t-Region--justifyCenter','t-Region--justifyEnd'],
            l_toggleItem = 'P2300_TOGGLE_ALIGN',
            l_affectedRegionSel = '.regionActionToggle',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        $(l_affectedRegionSel).find('.t-Region .t-Region-body').removeClass(l_flexClass.join(' '));

        if (l_toggleValue === 'NONE'){
            $(l_affectedRegionSel).find('.t-Region').removeClass(l_className);
        }
        else if (l_toggleValue === 'START'){
            $(l_affectedRegionSel).find('.t-Region').addClass(l_className);
            $(l_affectedRegionSel).find('.t-Region .t-Region-body').addClass(l_flexClass[0]);
        }
        else if (l_toggleValue === 'CENTER'){
            $(l_affectedRegionSel).find('.t-Region').addClass(l_className);
            $(l_affectedRegionSel).find('.t-Region .t-Region-body').addClass(l_flexClass[1]);
        }
        else if (l_toggleValue === 'END'){
            $(l_affectedRegionSel).find('.t-Region').addClass(l_className);
            $(l_affectedRegionSel).find('.t-Region .t-Region-body').addClass(l_flexClass[2]);
        }
    };
})(demo.page2300, apex.jQuery);
