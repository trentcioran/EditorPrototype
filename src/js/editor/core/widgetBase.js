/**
 @class WidgetBase, base component for all system widgets, provides a common contract
 to facilitate handling by toolbar and drag/drop functionalities
 */
define(['jquery', 'knockout-mapping', 'prototype'], function($j, kom) {

    var proto = Class.create({
        name: '',

        metadata: {},

        initialize: function() {
            this.metadata = kom.fromJS(this.metadata);
        },

        render: function() {},

        getCurrentState: function() {
            return kom.toJS(this.metadata);
        },

        setCurrentState: function(newState) {
        },

        setProperty: function(property, value) {
            this.metadata[property](value);
        },

        destroy: function() {
            this._ele.detach();
        }
    });

    return proto;
});