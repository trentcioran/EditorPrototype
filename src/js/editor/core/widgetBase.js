/**
 @class WidgetBase, base component for all system widgets, provides a common contract
 to facilitate handling by toolbar and drag/drop functionalities
 */
define(['jquery', 'knockout-mapping', 'prototype'], function($j, kom, $j) {

    var proto = Class.create({
        name: '',

        metadata: {},

        initialize: function() {
            this.metadata = kom.fromJS(this.metadata);
        },

        render: function() {},

        /**
         @method Method used to retrieve the current state in the form of the widget's
         metadata.
         @return the widget metadata
         */
        getCurrentState: function() {
            return kom.toJS(this.metadata);
        },

        /**
         @method Sets the state to configure the widget, this method can be used either to
         load the state to continue editing or to apply a change on values.
         @param newState
         */
        setCurrentState: function(newState) {
        },

        /**
         @method Sets an individual property
         @param property
         @param value
         */
        setProperty: function(property, value) {
            this.metadata[property](value);
        },

        activate: function() {},

        /**
         @method Removes the HTML element from the DOM
         */
        destroy: function() {
            this._ele.detach();
        }
    });

    return proto;
});