/**
 @class Represents a text element
 @extends Pod
 */
define(['jquery', 'pods/base', 'knockout', 'ckeditor'], function($j, Pod, ko) {

    var counter = 1;

    var proto = Class.create(Pod, {

        _id: null,

        _editor: null,

        initialize: function ($super, widgets) {
            this.name = 'Text';
            this.metadata = {
                'bgColor': ko.observable('white'),
                'border': ko.observable('1px solid lightGrey'),
                'width': ko.observable('100%'),
                'height': ko.observable('100px')
            };
            $super(widgets);
        },
        render: function($super, ele) {
            this._id = 'textPod_' + counter++;

            this._ele = $j('<textarea cols="80" id="' + this._id + '" name="' + this._id + '" rows="7"></textarea>');
            ele.append(this._ele);

            $super(ele);

            this._editor = CKEDITOR.replace(this._id,
            {
                uiColor : '#FFFFFF',
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
        },

        destroy: function($super){
            CKEDITOR.remove(this._id);
            $super();
        }
    });

    return {
        name: 'Text',
        /* Popover element data */
        title: 'Text',
        content: 'A rich text paragraph element',
        prototype: proto
    };
});