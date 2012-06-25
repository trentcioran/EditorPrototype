/**
 @class Represents a two column layout
 @extends Layout
 */
define(['jquery', 'layouts/base'], function($j, Layout) {

    var proto = Class.create(Layout, {
        _ele: null,

        metadata: {
            'background-color': 'white',
            'border': '1px solid gray',
            'width': '100%',
            'height': '100px'
        },

        initialize: function () {
            this.name = 'Two';
        },
        render: function(ele) {
            console.log('rendering [' + this.name + '] to element: ' + ele);

            this._ele = $j('<table><tr><td class="l-container"><span>Drop here an element!</span></td><td class="l-container"><span>Drop here an element!</span></td></tr></table>')
                .css(this.metadata);

            ele.append(this._ele);

            console.log('[' + this.name + '] rendered.');
        }
    });

    return {
        name: 'Two',
        /* Popover element data */
        title: 'Two Column Layout',
        content: 'Use this layout when you want to have a two columns',
        prototype: proto
    };
});