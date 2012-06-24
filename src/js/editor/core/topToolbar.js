/**
 @class TopToolbar, renders the available actions for the currently selected widget
 */
define(['jquery', 'prototype'], function($j){

    var proto = Class.create({
        render: function() {
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
        }
    });

    return proto;
});