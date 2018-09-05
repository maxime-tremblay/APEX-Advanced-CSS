// Application Global JS

(function($){
    /*
     * Document ready logic
     */
    $( function() {
        $('.codeTabs').tabs();
    });
})(apex.jQuery);

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

    var l_grid_class = 'grid',
        l_grid_item_class = 'grid__item',
        l_grid_html = '<div class="' + l_grid_class + '">' +
                         '<div class="' + l_grid_item_class + '" style="--span:2; --colStart:14; --rowStart:5; --blur:1px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:2; --colStart:9; --rowStart:8; --blur:9px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:6; --colStart:2; --rowStart:2; --blur:3px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:2; --colStart:4; --rowStart:4; --blur:1px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:4; --colStart:1; --rowStart:4; --blur:8px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:6; --colStart:4; --rowStart:3; --blur:5px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:5; --colStart:11; --rowStart:1; --blur:2px;"></div>' +
                      '</div>';
    
    function _addGridContainer(){
        $('body').append(l_grid_html);
    }
    
    function _removeGridContainer(){
        $('.' + l_grid_class).remove();
    }
    
    curPage.changeBackground = function (){
        var l_className = 't-Region--flexBody',
            l_backgroundClass = ['t-PageBody--backgroundGradient','t-PageBody--backgroundGrid','t-PageBody--backgroundImage'],
            l_toggleItem = 'P101_BACKGROUND',
            l_affectedRegionSel = '.t-PageBody--login',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        $(l_affectedRegionSel).removeClass(l_backgroundClass.join(' '));
        _removeGridContainer();

        if (l_toggleValue === 'GRADIENT'){
            $(l_affectedRegionSel).addClass(l_backgroundClass[0]);
        }
        else if (l_toggleValue === 'GRID'){
            $(l_affectedRegionSel).addClass(l_backgroundClass[1]);
            _addGridContainer();
        }
        else if (l_toggleValue === 'IMAGE'){
            $(l_affectedRegionSel).addClass(l_backgroundClass[2]);
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

// Page 2700 Specific JS
// Flexbox Basis

var demo = demo || {};

demo.page2700 = {};

(function(curPage, $){
    "use strict";

    var l_itemDisplay         = 'P2700_DISPLAY',
        l_itemDirection       = 'P2700_DIRECTION',
        l_itemLtrRtl          = 'P2700_LTR_RTL',
        l_itemWrap            = 'P2700_WRAP',
        l_itemJustifyContent  = 'P2700_JUSTIFY_CONTENT',
        l_itemAlignItems      = 'P2700_ALIGN_ITEMS',
        l_itemAlignContent    = 'P2700_ALIGN_CONTENT',
        l_itemContainerHeight = 'P2700_CONTAINER_HEIGHT';
        
    var l_flexExampleClass = 'flexExample',
        l_flexExampleSel = '.' + l_flexExampleClass,
        l_containerClass = 'demoContainer',
        l_containerSel = '.' + l_containerClass,
        l_itemClass = 'demoItem',
        l_itemSel = '.' + l_itemClass;

    var l_containerHtml = '<div class="' + l_containerClass + '"></div>',
        l_itemHtml = '<div class="' + l_itemClass + '"></div>';

    curPage.initContainer = function() {
        $(l_flexExampleSel).append(l_containerHtml);
        
        for (var i = 0; i < 5; i++) { 
            curPage.addItem();
        }
    };

    curPage.addItem = function (){
        var l_itemCount = $(l_containerSel).find(l_itemSel).length + 1;

        $(l_itemHtml).appendTo(l_containerSel).text(l_itemCount);
    };

    curPage.removeItem = function (){
        $(l_containerSel).find(l_itemSel).last().remove();
    };

    curPage.changeDisplay = function (){
        // Display Classes
        var l_containerDisplay = ['flex'],
            l_containerDisplayClass = ['containerDisplay--flex'];

        var l_toggleValue = apex.item(l_itemDisplay).getValue(),
            l_index = l_containerDisplay.indexOf(l_toggleValue);

        $(l_containerSel).removeClass(l_containerDisplayClass.join(' '));

        //if flex
        if (l_index >= 0){
            $(l_containerSel).addClass(l_containerDisplayClass[l_index]);
            
            apex.item(l_itemDirection).show();
            apex.item(l_itemDirection).setValue('row');
            
            apex.item(l_itemLtrRtl).show();
            apex.item(l_itemLtrRtl).setValue('ltr');

            apex.item(l_itemWrap).show();
            apex.item(l_itemWrap).setValue('nowrap');

            apex.item(l_itemJustifyContent).show();
            apex.item(l_itemJustifyContent).setValue('flex-start');

            apex.item(l_itemAlignItems).show();
            apex.item(l_itemAlignItems).setValue('flex-start');

            apex.item(l_itemAlignContent).show();
            apex.item(l_itemAlignContent).setValue('flex-start');

            apex.item(l_itemContainerHeight).show();
            apex.item(l_itemContainerHeight).setValue('auto');
        }
        else {
            apex.item(l_itemDirection).setValue('');
            apex.item(l_itemDirection).hide();

            apex.item(l_itemLtrRtl).setValue('');
            apex.item(l_itemLtrRtl).hide();

            apex.item(l_itemWrap).setValue('');
            apex.item(l_itemWrap).hide();

            apex.item(l_itemJustifyContent).setValue('');
            apex.item(l_itemJustifyContent).hide();

            apex.item(l_itemAlignItems).setValue('');
            apex.item(l_itemAlignItems).hide();

            apex.item(l_itemAlignContent).setValue('');
            apex.item(l_itemAlignContent).hide();

            apex.item(l_itemContainerHeight).setValue('');
            apex.item(l_itemContainerHeight).hide();
        }
    };

    curPage.changeDirection = function (){
        //Direction Classes
        var l_flexDirection = ['row', 'row-reverse', 'column', 'column-reverse'],
            l_flexDirectionClass = ['containerDirection--row', 'containerDirection--rowReverse', 'containerDirection--column', 'containerDirection--columnReverse'];

        var l_toggleValue = apex.item(l_itemDirection).getValue(),
            l_index = l_flexDirection.indexOf(l_toggleValue);
        
        $(l_containerSel).removeClass(l_flexDirectionClass.join(' '));

        if (l_index >= 0){
            $(l_containerSel).addClass(l_flexDirectionClass[l_index]);
        }
    };

    curPage.changeLtrRtl = function (){
        //Text Orientation Classes
        var l_rtlClass = 'u-RTL';

        var l_toggleValue = apex.item(l_itemLtrRtl).getValue();
        
        $('html').removeClass(l_rtlClass);

        if (l_toggleValue === 'rtl'){
            $('html').addClass(l_rtlClass);
        }
    };

    curPage.changeWrap = function (){
        //Wrap Classes
        var l_flexWrap = ['nowrap', 'wrap', 'wrap-reverse'],
            l_flexWrapClass = ['containerWrap--nowrap', 'containerWrap--wrap', 'containerWrap--wrapReverse'];

        var l_toggleValue = apex.item(l_itemWrap).getValue(),
            l_index = l_flexWrap.indexOf(l_toggleValue);

        $(l_containerSel).removeClass(l_flexWrapClass.join(' '));

        if (l_index >= 0){
            $(l_containerSel).addClass(l_flexWrapClass[l_index]);
        }
    };

    curPage.changeJustifyContent = function (){
        //Wrap Classes
        var l_flexJustifyContent = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
            l_flexJustifyContentClass = ['containerJustifyContent--flexStart','containerJustifyContent--flexEnd','containerJustifyContent--center','containerJustifyContent--spaceBetween','containerJustifyContent--spaceAround','containerJustifyContent--spaceEvenly'];

        var l_toggleValue = apex.item(l_itemJustifyContent).getValue(),
            l_index = l_flexJustifyContent.indexOf(l_toggleValue);

        $(l_containerSel).removeClass(l_flexJustifyContentClass.join(' '));

        if (l_index >= 0){
            $(l_containerSel).addClass(l_flexJustifyContentClass[l_index]);
        }
    };

    curPage.changeAlignItems = function (){
        //Wrap Classes
        var l_flexAlignItems = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
            l_flexAlignItemsClass = ['containerAlignItems--flexStart','containerAlignItems--flexEnd','containerAlignItems--center','containerAlignItems--baseline','containerAlignItems--stretch'];

        var l_toggleValue = apex.item(l_itemAlignItems).getValue(),
            l_index = l_flexAlignItems.indexOf(l_toggleValue);

        $(l_containerSel).removeClass(l_flexAlignItemsClass.join(' '));

        if (l_index >= 0){
            $(l_containerSel).addClass(l_flexAlignItemsClass[l_index]);
        }
    };

    curPage.changeAlignContent = function (){
        //Wrap Classes
        var l_flexAlignContent = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
            l_flexAlignContentClass = ['containerAlignContent--flexStart','containerAlignContent--flexEnd','containerAlignContent--center','containerAlignContent--spaceBetween','containerAlignContent--spaceAround','containerAlignContent--stretch'];

        var l_toggleValue = apex.item(l_itemAlignContent).getValue(),
            l_index = l_flexAlignContent.indexOf(l_toggleValue);

        $(l_containerSel).removeClass(l_flexAlignContentClass.join(' '));

        if (l_index >= 0){
            $(l_containerSel).addClass(l_flexAlignContentClass[l_index]);
        }
    };

    curPage.changeContainerHeight = function (){
        //Wrap Classes
        var l_flexContainerHeight = ['300', '500'],
            l_flexContainerHeightClass = ['demoContainer--height300','demoContainer--height500'];

        var l_toggleValue = apex.item(l_itemContainerHeight).getValue(),
            l_index = l_flexContainerHeight.indexOf(l_toggleValue);

        $(l_containerSel).removeClass(l_flexContainerHeightClass.join(' '));

        if (l_index >= 0){
            $(l_containerSel).addClass(l_flexContainerHeightClass[l_index]);
        }
    };



    /*
     * Document ready logic
     */
    $( function() {
        curPage.changeDisplay();
    });
})(demo.page2700, apex.jQuery);

//# sourceMappingURL=app.js.map
