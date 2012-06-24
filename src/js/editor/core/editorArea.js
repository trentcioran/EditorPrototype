/**
 @class EditorArea, takes care of the workable area of the editor
 */
define(['jquery', 'prototype'], function($j) {

    var proto = Class.create({
        _ele: null,

        render: function(ele) {
            this._ele = ele;

            ele.css({ height: '500px' })
                .droppable({
                    accept: 'div.toolbar-element',
                    greedy: true,
                    hoverClass: "ui-state-active",
                    activeClass: 'ui-state-hover',
                    drop: function(evt, ui) {
                        console.log('element dropped...' + ui);

                        $j( this ).addClass( "ui-state-highlight" );
                    }
                });
        }
    });

    return proto;
});