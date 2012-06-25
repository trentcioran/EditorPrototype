/**
 @class EditorArea, takes care of the workable area of the editor
 */
define(['jquery', 'prototype', 'text!editor/core/editorArea.html', 'core/containerBase'],
    function($j, $, template, Container) {

    window.__editorAreaItemId = 1;

    var proto = Class.create(Container, {

        initialize: function($super, widgets) {
            $super(widgets);

            this._sortableContainment = '#editor-area';
            this._acceptDrop = 'div.toolbar-element';
        },

        render: function($super, ele) {
            var me = this;
            ele.append(template);

            $super(ele);
            ele.css({ height: '600px' });

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
        }
    });

    return proto;
});