/**
 @class Represents an image element
 @extends Pod
 */
define(['jquery', 'pods/base'], function($j, Pod) {

    var proto = Class.create(Pod, {
        initialize: function () {
            this.name = 'Image';
        },
        render: function($super) {
        }
    });

    return proto;
});