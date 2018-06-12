// Page 101 Specific JS
// Login Page

var demo = demo || {};

demo.page101 = {};

(function(curPage, $){
    "use strict";

    var l_affectedRegionSel = '.t-Region--loginWrapper',
        l_loginAnim = 'anim-showLogin',
        l_registerAnim = 'anim-showRegister',
        l_registerState = 'is-register',
        l_animLength = 1000,
        l_animDelay = 200;

    curPage.showLogin = function() {
        $(l_affectedRegionSel).addClass(l_loginAnim);

        setTimeout(function(){
            $(l_affectedRegionSel).removeClass(l_registerState);
        }, (l_animLength/2) + l_animDelay);

        setTimeout(function(){
            $(l_affectedRegionSel).removeClass(l_loginAnim);
        }, l_animLength + l_animDelay);
    };

    curPage.showRegister = function() {
        $(l_affectedRegionSel).addClass(l_registerAnim);

        setTimeout(function(){
            $(l_affectedRegionSel).addClass(l_registerState);
            $(l_affectedRegionSel).removeClass(l_registerAnim);
        }, l_animLength + l_animDelay);
    };

    curPage.changeBackground = function (){
        var l_className = 't-Region--flexBody',
            l_backgroundClass = ['t-PageBody--backgroundGradient','t-PageBody--backgroundImage'],
            l_toggleItem = 'P101_BACKGROUND',
            l_affectedRegionSel = '.t-PageBody--login',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        $(l_affectedRegionSel).removeClass(l_backgroundClass.join(' '));

        if (l_toggleValue === 'GRADIENT'){
            $(l_affectedRegionSel).addClass(l_backgroundClass[0]);
        }
        else if (l_toggleValue === 'IMAGE'){
            $(l_affectedRegionSel).addClass(l_backgroundClass[1]);
        }
    };
})(demo.page101, apex.jQuery);
