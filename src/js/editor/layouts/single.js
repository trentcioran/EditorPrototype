/**
 @class Represents a single layout
 @extends Layout
 */
define(['jquery', 'knockout', 'layouts/base', 'text!editor/layouts/single.html'],
    function($j, ko, Layout, template) {

    /**
     @class Single Layout Widget definition
     */
    var proto = Class.create(Layout, {

        initialize: function ($super, widgets) {
            this._sortableContainment = '#editor-area';
            this._acceptDrop = 'div.toolbar-element';

            this.name = 'Single';
            this.metadata = {
                'bgColor': ko.observable('white'),
                    'border': ko.observable('1px solid lightGrey'),
                    'width': ko.observable('100%'),
                    'height': ko.observable('100px')
            };

            $super(widgets);
        },

        render: function($super, ele) {
            console.log('rendering [' + this.name + '] to element: ' + ele);
            var me = this;
            $super(ele);

            this._ele = $j(template);
            this._targetAppend = this._ele.find('.l-container > ul');

            // resizing behavior
            this._ele.resizable({
                stop: function() {
                    me.metadata.height(me._ele.height() + 'px');
                }
            });

            ele.append(this._ele);

            ko.applyBindings(this.metadata, this._ele[0])
            console.log('[' + this.name + '] rendered.');
        },

        onBeforeProcessDrop: function() {
            $j(this._ele).find('ul.connectedSortable > span').detach();
        }
    });

    return {
        name: 'Single',
        icon: 'http://placehold.it/260x180',
        /* Popover element data */
        title: 'Single Layout',
        content: 'Use this layout when you want to spread all over the width of your design',
        prototype: proto
    };
});