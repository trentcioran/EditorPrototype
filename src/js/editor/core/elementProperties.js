/**
 @class Renders and allows manipulation of a widget's properties
 */
define(['jquery', 'prototype', 'text!editor/core/elementProperties.html'],
    function($j, $, template) {

    return Class.create({
        _component: null,
        _originalState: null,
        _currentState: null,

        initialize: function(component) {
            this._component = component;
            this._originalState = this._currentState = component.getState();
        },

        render: function(ele) {
            var me = this;
            this._ele = $j(Mustache.render(template, this._component.metadata));

            this._ele.find('.btn-primary').click(function() {
                me._ele.modal('hide');
            });

            this._ele.modal()
                .on('hidden', function() {
                    me._ele.detach();
                });
            ele.append(this._ele);
        }
    });
});