/**
 @class base class for editor elements
 */
define(['jquery', 'prototype', 'text!editor/core/toolbarWidget.html'], function($j, Prototype, template){

    var proto = Class.create({
        _component: null,
        _ele: null,

        initialize: function(component) {
            console.log('Toolbar Widget for: ' + component.name);

            this._component = component;
        },
        render: function(ele) {
            console.log('Render toolbar widget: ' + this._component.name);

            this._ele = ele;

            ele.append(Mustache.render(template, {
                name: this._component.name,
                icon: this._component.icon
            }));
        }
    });

    return proto;
});