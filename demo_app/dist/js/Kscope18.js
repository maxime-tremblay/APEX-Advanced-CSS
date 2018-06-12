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

// Page 1400 Specific JS
// Region in Navbar

var demo = demo || {};

demo.page1400 = {};

(function(curPage, $){
    /*
     * Document ready logic
     */
    $( function() {
        $('.page-1400 .underNavBar').appendTo('#t_TreeNav');
    });
})(demo.page1400, apex.jQuery);

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

//# sourceMappingURL=Kscope18.js.map
