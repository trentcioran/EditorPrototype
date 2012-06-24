/**
 @class EditorItem, decorator, adds all visual elements and behaviors to the
 widget for interaction with the editor like resizing and reordering functionality
 as well as properties edition
 */
define(['jquery', 'prototype', 'text!editor/core/editorItem.html'], function($j, $, template) {

    return Class.create({
        _ele: null,
        _component: null,

        initialize: function(component) {
            this._component = component;
        },

        render: function(ele) {
            this._ele = ele;

            this._component.render(ele);
        }
    });
});