/**
 @class Generic component that renders a toolbar container,
 toolbar component is used to wrap layout and pod components
 */
define(['jquery', 'text!editor/core/toolbar.html', 'core/toolbarWidget'],
    function($j, template, ToolbarWidget) {

    var proto = Class.create({
        _config: null,
        _items: [],
        _ele: null,

        initialize: function(config) {
            console.log('Toolbar initialization.');

            this._config = config;

            this._items = [];
            for(var i = 0; i < config.items.length; i++) {
                this._items.push(new ToolbarWidget(config.items[i]));
            }
        },
        render: function(ele) {
            console.log('Render toolbar.');

            this._ele = ele;

            ele.append(Mustache.render(template, { name: this._config.name }));

            var target = ele.find('.t-container');
            for(var i = 0; i < this._items.length; i++)
                this._items[i].render(target);

            $j('.toolbar-element').draggable({ opacity: 0.8, helper: 'clone', revert: 'invalid' });
            $j('.toolbox').selectable({ filter: '.toolbar-element' });
        }
    });

    return proto;
});