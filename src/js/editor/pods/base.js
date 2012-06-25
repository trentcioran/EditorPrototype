/**
 @class Provides core pod capabilities
 @extends WidgetBase
 */
define(['core/widgetBase'], function(WidgetBase) {

    var proto = Class.create(WidgetBase, {
        initialize: function($super, widgets) {
            $super(widgets);
        },
        render: function($super, ele) {
            $super(ele);
        }
    });

    return proto;
});