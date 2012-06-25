/**
 @class Abstract Container, widgets can be dropped into this component
 */
define(['jquery', 'prototype', 'core/editorItem', 'core/widgetBase'],
    function($j, $, EditorItem, Widget) {

        window.__editorAreaItemId = 1;

        var proto = Class.create(Widget, {
            _ele: null,

            _targetAppend: null,

            _widgets: null,

            _current: null,

            _items: null,

            _sortableContainment: null,

            _connectedWith: '.connectedSortable',

            _acceptDrop: null,

            initialize: function(widgets) {
                this._items = {};
                this._widgets = widgets;
            },

            render: function(ele) {
                this._ele = ele;
                this._enableBehavior(ele);
            },

            _enableBehavior: function(ele) {
                var me = this;

                // sortable behavior
                this._targetAppend = ele.find('ul');

                this._targetAppend.sortable({
                    placeholder: 'ui-state-highlight',
                    handle: 'a.drag-handler',
                    connectedWith: me._connectedWith,
                    containment: me._sortableContainment,
                    start: function(evt, ui) {
                        var x = ui;
                        evt.stopPropagation();
                    },
                    stop: function(evt, ui) {
                        me._processStopSorting(ui);
                    }
                }).disableSelection();

                // drop behavior
                ele.droppable({
                    accept: me._acceptDrop,
                    greedy: true,
                    hoverClass: "droppable-active",
                    drop: function(evt, ui) {
                        console.log('element dropped: ' + ui.draggable.data('widget-name'));
                        me.onBeforeProcessDrop();
                        me._processDrop(ui);
                    }
                });
            },

            activate: function() {
                $j('#topSpace').block({ message: null });
            },

            getContentElement: function() {
                return this._targetAppend;
            },

            onBeforeProcessDrop: function() {
                $j(this._targetAppend).find('ul.connectedSortable > span').detach();
            },

            _processDrop: function (ui) {
                var draggable = ui.draggable.data('widget-name');
                var thePrototype = this._getPrototype(draggable);
                var instance = new thePrototype(this._widgets);

                var id = this._getNextId();
                var decorator = new EditorItem(id, instance);
                decorator.delete($j.proxy(this._removeInstance, this));

                this._items[id] = decorator;
                decorator.render(this.getContentElement());
            },

            _processStopSorting: function(ui) {
                var id = $j(ui.item).attr('id').replace('editorItem-', '');
                var item = this._items[id];

                item.onStopSorting();
            },

            _getPrototype: function(widgetName) {
                var theWidget;
                this._widgets.each(function(widget) {
                    if (widget.name == widgetName) {
                        theWidget = widget;
                    }
                });

                return theWidget.prototype;
            },

            _getNextId: function() {
                return window.__editorAreaItemId++;
            },

            _removeInstance: function(id) {
                delete this._items[id];

                return true; // <-- proceed, false to cancel
            }
        });

        return proto;
    });