/**
 @class Provides core pod capabilities
 @extends WidgetBase
 */
define(['core/widgetBase', 'jquery'], function(WidgetBase, $j) {

    var proto = Class.create(WidgetBase, {

        initialize: function($super, widgets) {
            $super(widgets);
        },

        render: function($super, ele) {
            $super(ele);
        },

        activate: function() {
            $j('#topSpace').block({ message: null });
        }
    });

    return proto;
});