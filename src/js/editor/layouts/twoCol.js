/**
 @class Represents a two column layout
 @extends Layout
 */
define(['jquery', 'knockout', 'layouts/base', 'text!editor/layouts/twoCol.html'],
    function($j, ko, Layout, template) {

        var proto = Class.create(Layout, {

        initialize: function ($super, widgets) {
            this._sortableContainment = '#editor-area';
            this._acceptDrop = 'div.toolbar-element';
            this._dropableSelector = 'td.l-container';

            this.name = 'Two';
            this.metadata = {
                'bgColor': ko.observable('white'),
                'border': ko.observable('1px solid lightGrey'),
                'width': ko.observable('100%'),
                'widthCol1': ko.observable('50%'),
                'widthCol2': ko.observable('50%'),
                'height': ko.observable('100px')
            };

            $super(widgets);
        },

        render: function($super, ele) {
            console.log('rendering [' + this.name + '] to element: ' + ele);
            var me = this;

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

            $super(ele);
            console.log('[' + this.name + '] rendered.');
        },

        onBeforeProcessDrop: function() {
            $j(this._ele).find('ul.connectedSortable > span').detach();
        }
    });

    return {
        name: 'Two',
        /* Popover element data */
        title: 'Two Column Layout',
        content: 'Use this layout when you want to have a two columns',
        prototype: proto
    };
});