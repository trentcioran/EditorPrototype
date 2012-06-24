/**
 @class Represents a text element
 @extends Pod
 */
define(['jquery', 'pods/base'], function($j, Pod) {

    var proto = Class.create(Pod, {
        initialize: function () {
            this.name = 'Text';
        },
        render: function($super) {
        }
    });

    return proto;
});