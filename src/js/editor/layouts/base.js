/**
 @class Provides core layouing capabilities
 @extends WidgetBase
 */
define(['core/containerBase', 'jquery', 'jqblock'], function(Container, $j) {

    var proto = Class.create(Container, {
        initialize: function($super, widgets) {
            $super(widgets);
        },

        render: function($super, ele) {
            $super(ele);

            var me = this;
            this._ele.resize(function() {
                me.metadata.height(me._ele.height() + 'px');
            });
        }
    });

    return proto;
});
