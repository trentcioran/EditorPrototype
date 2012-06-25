/**
 @class EditorItem, decorator, adds all visual elements and behaviors to the
 widget for interaction with the editor like resizing and reordering functionality
 as well as properties edition
 */
define(['jquery', 'prototype', 'text!editor/core/editorItem.html', 'core/elementProperties'],
    function($j, $, template, PropertiesDialog) {

    return Class.create({
        _id: null,
        _ele: null,
        _component: null,
        _events: null,

        initialize: function(id, component) {
            this._id = id;
            this._component = component;
            this._events = {};
        },

        render: function(ele) {
            console.log('rendering editor element for [' + this._component.name + ']');

            this._ele = $j(Mustache.render(template, { id: this._id }));
            ele.append(this._ele);

            // render the control
            var target = this._ele.find('.element-content');
            this._component.render(target);

            this._wireEvents();
            console.log('editor element for [' + this._component.name + '] rendered.');
        },

        /**
         @method Used to attach events. Triggers when the Delete action is requested.
         */
        delete: function(listener) {
            this._events['delete'] = listener;
        },

        /**
         @method Used to attach events. Triggers when the element is moved onto another container.
         */
        move: function(listener) {
            this._events['move'] = listener;
        },

        onStopSorting: function() {
            this._component.onStopSorting();
        },

        _wireEvents: function() {
            var me = this, ele = this._ele;

            ele.click(function() {
                me._component.activate();
            });

            // delete action
            ele.find('.modal .btn-danger').click(function() {
                ele.find('.modal').modal('hide');

                if(me._events['delete'] && !me._events['delete'](me._id)) {
                    // provide feedback to user about event cancelation
                    return;
                }

                me._component.destroy();
                ele.detach();
            });

            ele.find('.remove-handler').click(function() {
                ele.find('.modal').modal();
            });

            ele.find('.properties-handler').click(function() {
                var dialog = new PropertiesDialog(me._component);
                dialog.render($j(document));
            });
        }
    });
});