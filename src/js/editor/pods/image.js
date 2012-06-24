/**
 @class Represents an image element
 @extends Pod
 */
define(['jquery', 'pods/base'], function($j, Pod) {

    var proto = Class.create(Pod, {
        initialize: function () {
            this.name = 'Image';
        },
        render: function(ele) {
            this._ele = $j('<span>Image!</span>');

            ele.append(this._ele);
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