/**
 @class base class for editor elements
 */
define(['jquery', 'prototype', 'text!editor/core/toolbarWidget.html'], function($j, Prototype, template){

    var proto = Class.create({
        _definition: null,
        _ele: null,

        initialize: function(definition) {
            console.log('Toolbar Widget for: ' + definition.name);

            this._definition = definition;
        },
        render: function(ele) {
            console.log('Render toolbar widget: ' + this._definition.name);

            this._ele = $j(Mustache.render(template, this._definition))
                .popover();
            this._ele.data('widget-name', this._definition.name);

            ele.append(this._ele);

        }
    });

    return proto;
});