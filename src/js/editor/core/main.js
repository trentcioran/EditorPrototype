/**
@module Core module
 Responsible for loading all editor components
 */
define(['jquery', 'text!editor/core/mainLayout.html',
    'core/toolbar', 'core/topToolbar', 'core/editorArea', 'layouts', 'pods'],
    function($j, template, Toolbar, TopToolbar, Editor, layouts, pods){

    var _toolbarArea;
    var _widgetToolbar;
    var _editorArea;

    var layoutTbar = new Toolbar(layouts);
    var podTbar = new Toolbar(pods);
    var topTbar = new TopToolbar();
    var editor = new Editor();

    return {
        /**
         @method initializes UI elements and wires up events
         */
        initialize: function (ele) {
            console.log('Initializing editor.');

            ele.append(template)

            _toolbarArea = $j('#toolbox-area');
            _widgetToolbar = $j('#widget-toolbar');
            _editorArea = $j('#editor-area');

            layoutTbar.render(_toolbarArea);
            podTbar.render(_toolbarArea);
            topTbar.render(_widgetToolbar);
            editor.render(_editorArea);

            console.log('Initialization complete.');
        }
    };
});