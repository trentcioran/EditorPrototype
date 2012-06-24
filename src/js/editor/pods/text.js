/**
 @class Represents a text element
 @extends Pod
 */
define(['jquery', 'pods/base'], function($j, Pod) {

    var proto = Class.create(Pod, {
        initialize: function () {
            this.name = 'Text';
        },
        render: function(ele) {
            this._ele = $j('<span>Text!</span>');

            ele.append(this._ele);
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