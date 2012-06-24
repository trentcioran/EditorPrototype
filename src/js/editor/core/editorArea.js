/**
 @class EditorArea, takes care of the workable area of the editor
 */
define(['jquery', 'prototype', 'text!editor/core/editorArea.html', 'core/editorItem'],
    function($j, $, template, EditorItem) {

    window.__editorAreaItemId = 1;

    var proto = Class.create({
        _ele: null,
        _targetAppend: null,
        _widgets: null,
        _current: null,
        _items: null,

        initialize: function(widgets) {
            this._items = {};
            this._widgets = widgets;
        },

        render: function(ele) {
            var me = this;
            this._ele = ele;

            ele.append(template);

            // sortable behavior
            this._targetAppend = ele.find('ul');
            this._targetAppend.sortable({
                placeholder: 'ui-state-highlight',
                handle: 'a.drag-handler'
            }).disableSelection();

            // drop behavior
            ele.css({ height: '500px' })
                .droppable({
                    accept: 'div.toolbar-element',
                    greedy: true,
                    hoverClass: "droppable-active",
                    activeClass: 'droppable-active',
                    drop: function(evt, ui) {
                        console.log('element dropped: ' + ui.draggable.data('widget-name'));
                        var draggable = ui.draggable.data('widget-name');
                        me._processDrop(draggable);
                    }
                });

            // place the initial toolbar
            CKEDITOR.replace( '_placeholder',
                {
                    sharedSpaces :
                    {
                        top : 'topSpace'
                    },
                    toolbar: [
                        { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','TextColor','BGColor','-','RemoveFormat' ] },
                        { name: 'paragraph',   items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
                        { name: 'clipboard',   items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
                        { name: 'insert',      items : [ 'Image','Table','HorizontalRule','Smiley' ] },
                        { name: 'styles',      items : [ 'Styles','Format','Font','FontSize' ] },
                        { name: 'links',       items : [ 'Link','Unlink','Anchor' ] },
                        { name: 'document',    items : [ 'Source' ] }
                    ]
                });

            // remove what we don't want for the moment
            $j('#_placeholder').detach();
            $j('#ck__placeholder').detach();
        },

        _processDrop: function (widgetName) {
            var thePrototype = this._getPrototype(widgetName);
            var instance = new thePrototype();

            var id = this._getNextId();
            var decorator = new EditorItem(id, instance);
            decorator.delete($j.proxy(this._removeInstance, this));

            this._items[id] = decorator;
            decorator.render(this._targetAppend);
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