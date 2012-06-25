/**
 @class Renders and allows manipulation of a widget's properties
 */
define(['jquery', 'knockout', 'knockout-mapping', 'prototype', 'text!editor/core/elementProperties.html'],
    function($j, ko, kom, $, template) {

    return Class.create({
        _component: null,
        _originalState: null,
        _currentState: null,

        initialize: function(component) {
            this._component = component;
            var meta = component.getCurrentState();

            this._currentState = this.getAsArray(meta, true);
            this._originalState = this.getAsArray(meta, false);
        },

        render: function(ele) {
            var me = this;
            this._ele = $j(template);

            this._ele.find('.cancel').click(function() {
                for(var i = 0; i < me._originalState.length; i++) {
                    var prop = me._originalState[i];
                    me._component.setProperty(prop.name, prop.value);
                }
                me._ele.modal('hide');
            });
            ele.append(this._ele);

            ko.applyBindings({ properties: me._currentState }, this._ele[0])

            // auto remove modal
            this._ele.modal().on('hidden', function() {
                me._ele.detach();
            })
            .css({
                width: '400px'
            })
            .offset({
                left: 300,
                top: 300
            });
        },

        getAsArray: function(metadata, observables) {
            var data = [];
            for(var prop in metadata) {
                var value;
                if (observables) {
                    value = metadata[prop];
                } else {
                    value = metadata[prop]();
                }
                data.push({
                    name: prop,
                    value: value
                });
            }

            return data;
        }
    });
});