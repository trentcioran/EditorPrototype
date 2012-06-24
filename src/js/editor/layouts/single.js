/**
 @class Represents a single layout
 @extends Layout
 */
define(['jquery', 'layouts/base'], function($j, Layout) {

    /**
     @class Single Layout Widget definition
     */
    var proto = Class.create(Layout, {
        _ele: null,

        metadata: {
            'background-color': 'white',
            'border': '1px solid gray',
            'width': '100%',
            'height': '100px'
        },

        initialize: function () {
            this.name = 'Single';
        },

        render: function(ele) {
            console.log('rendering [' + this.name + '] to element: ' + ele);

            this._ele = $j('<table><tr><td class="l-container"><span>Drop here an element!</span></td></tr></table>')
                .css(this.metadata);

            ele.append(this._ele);

            console.log('[' + this.name + '] redered.');
        }
    });

    return {
        name: 'Single',
        icon: 'http://placehold.it/260x180',
        /* Popover element data */
        title: 'Single Layout',
        content: 'Use this layout when you want to spread all over the width of your newsletter',
        prototype: proto
    };
});