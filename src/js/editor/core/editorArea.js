/**
 @class EditorArea, takes care of the workable area of the editor
 */
define(['jquery', 'prototype', 'text!editor/core/editorArea.html', 'core/editorItem'],
    function($j, $, template, EditorItem) {

    var proto = Class.create({
        _ele: null,
        _targetAppend: null,
        _widgets: null,
        _current: null,
        _items: null,

        initialize: function(widgets) {
            this._items = [];
            this._widgets = widgets;
        },

        render: function(ele) {
            this._ele = ele;

            ele.append(template);

            this._targetAppend = ele.find('ul');
            this._targetAppend.sortable({
                placeholder: "ui-state-highlight"
            }).disableSelection();

            var me = this;

            ele.css({ height: '500px' })
                .droppable({
                    accept: 'div.toolbar-element',
                    greedy: true,
                    hoverClass: "droppable-active",
                    activeClass: 'droppable-active',
                    drop: function(evt, ui) {
                        console.log('element dropped...' + ui + ', name: ' + ui.draggable.data('widget-name'));
                        var draggable = ui.draggable.data('widget-name');
                        me._processDrop(draggable);
                    }
                });

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

            $j('#_placeholder').detach();
            $j('#ck__placeholder').detach();
        },

        _processDrop: function (widgetName) {
            var theWidget;
            this._widgets.each(function(widget) {
                if (widget.name == widgetName) {
                    theWidget = widget;
                }
            });

            var thePrototype = theWidget.prototype;
            var instance = new thePrototype();
            var decorator = new EditorItem(instance);

            this._items.push(decorator);
            decorator.render(this._targetAppend);
        }
    });

    return proto;
});