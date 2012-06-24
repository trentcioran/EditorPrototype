/**
 @class Represents a single layout
 @extends Layout
 */
define(['jquery', 'layouts/base'], function($j, Layout) {

    var proto = Class.create(Layout, {
        initialize: function () {
            this.name = 'Single';
        },
        render: function($super) {
        }
    });

    return proto;
});