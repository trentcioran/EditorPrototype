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

        initialize: function () {
            this.name = 'Single';
        },
        render: function(ele) {
            this._ele = $j('<li>Single!</li>');

            ele.append(this._ele);
        }
    });

    return {
        name: 'Single',
        icon: 'http://placehold.it/260x180',
        /* Popover element data */
        title: 'Two Column Layout',
        content: 'Use this layout when you want to spread all over the width of your newsletter',
        prototype: proto
    };
});