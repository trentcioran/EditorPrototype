/**
 @class Renders and allows manipulation of a widget's properties
 */
define(['jquery', 'knockout', 'prototype', 'text!editor/core/elementProperties.html'],
    function($j, ko, $, template) {

    return Class.create({
        _component: null,
        _originalState: null,
        _currentState: null,

        initialize: function(component) {
            this._component = component;
            this._originalState = this._currentState = component.getCurrentState();
        },

        render: function(ele) {
            var me = this;

            var data = [];
            for(var prop in this._currentState) {
                this._currentState[prop] = ko.observable(this._currentState[prop])
                data.push({
                    name: prop,
                    value: this._currentState[prop]
                });
            }

            this._ele = $j(template);

            this._ele.find('.btn-primary').click(function() {
                me._ele.modal('hide');
            });

            this._ele.modal()
                .on('hidden', function() {
                    me._ele.detach();
                });
            ele.append(this._ele);

            ko.applyBindings({ properties: data }, this._ele[0])
        }
    });
});