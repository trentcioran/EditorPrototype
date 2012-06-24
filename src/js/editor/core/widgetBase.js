/**
 @class WidgetBase, base component for all system widgets, provides a common contract
 to facilitate handling by toolbar and drag/drop functionalities
 */
define(['prototype'], function() {

    var proto = Class.create({
        name: 'widget',
        icon: 'http://placehold.it/260x180',

        initialize: function() {},
        render: function() {},
        getWidgetConfig: function() {
            return {
                name: this.name,
                icon: this.icon
            };
        }
    });

    return proto;
});