/**
 @class Represents an image element
 @extends Pod
 */
define(['jquery', 'pods/base', 'knockout', 'ckeditor'], function($j, Pod, ko) {

    var proto = Class.create(Pod, {
        initialize: function ($super, widgets) {
            this.name = 'Text';
            this.metadata = {
                'bgColor': ko.observable('white'),
                'border': ko.observable('1px solid lightGrey'),
                'width': ko.observable('100%'),
                'height': ko.observable('100px'),
                'imageSource': ko.observable('http://www.simplesend.com/images/simplesend_logo.gif')
            };

            $super(widgets);
        },

        render: function($super, ele) {
            // container element
            this._ele = $j('<img data-bind="attr:{ src: imageSource }, style: { backgroundColor: bgColor, border: border, height: height, width: width }" />');
            ele.append(this._ele);

            ko.applyBindings(this.metadata, this._ele[0])

            // update height after rendering the editor
            this.metadata.height(this._ele.height() + 'px');
            $super(ele);
        }
    });

    return {
        name: 'Image',
        /* Popover element data */
        title: 'Image',
        content: 'An element to display an image',
        prototype: proto
    };
});