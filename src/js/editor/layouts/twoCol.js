/**
 @class Represents a two column layout
 @extends Layout
 */
define(['jquery', 'layouts/base'], function($j, Layout) {

    var proto = Class.create(Layout, {
        initialize: function () {
            this.name = 'Two';
        },
        render: function($super) {
        }
    });

    return proto;
});