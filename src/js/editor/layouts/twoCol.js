/**
 @class Represents a two column layout
 @extends Layout
 */
define(['jquery', 'layouts/base'], function($j, Layout) {

    var proto = Class.create(Layout, {
        initialize: function () {
            this.name = 'Two';
        },
        render: function(ele) {
            this._ele = $j('<span>Two!</span>');

            ele.append(this._ele);
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