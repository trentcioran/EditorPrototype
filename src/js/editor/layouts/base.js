/**
 @class Provides core layouing capabilities
 @extends WidgetBase
 */
define(['core/containerBase'], function(Container) {

    var proto = Class.create(Container, {
        initialize: function($super, widgets) {
            $super(widgets);
        },
        render: function($super, ele) {
            $super(ele);
        }
    });

    return proto;
});