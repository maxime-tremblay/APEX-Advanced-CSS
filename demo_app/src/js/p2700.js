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
