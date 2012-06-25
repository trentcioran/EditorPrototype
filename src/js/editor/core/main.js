/**
@module Core module
 Responsible for loading all editor components
 */
define(['jquery', 'prototype', 'text!editor/core/mainLayout.html',
    'core/toolbar', 'core/editorArea', 'layouts', 'pods'],
    function($j, $, template, Toolbar, Editor, layouts, pods){

    var _toolbarArea;
    var _widgetToolbar;
    var _editorArea;

    var allWidgets = [layouts.items, pods.items].flatten();


    var layoutTbar = new Toolbar(layouts);
    var podTbar = new Toolbar(pods);
    var editor = new Editor(allWidgets);

    var wireEvents = function() {
        console.log('setting up main events');

        // initialize the preview modal
        $j('#previewBtn').click(function() {
            $j('#preview-modal').modal('show');
        });

        var toolsVisible =true;
        $j('#hideToolsBtn').click(function() {
            if (toolsVisible) {
                $j('.handler,.ui-resizable-handle').hide();
                toolsVisible = false;
            } else {
                $j('.handler,.ui-resizable-handle').show();
                toolsVisible = true;
            }
        });

        // save functions
        $j('#saveBtn').click(function() {
            console.log('saving newsletter...');

            $j('#save-modal').modal('show');
            // reset animation
            $j('#save-modal').find('div.bar').css({
                width: '0%'
            });
            $j('#save-modal').find('.btn.disabled')
                .button('loading');

            // simulate saving
            $j('#save-modal').find('div.bar')
                .animate({
                    width: '100%'
                }, 2000, function() {
                    console.log('newsletter saved');

                    $j('#save-modal').find('.btn.disabled')
                        .button('complete');
                });
        });

        console.log('setting up main events, done.');
    };

    return {
        /**
         @method initializes UI elements and wires up events
         */
        initialize: function (ele) {
            console.log('Initializing editor.');

            ele.append(template);

            _toolbarArea = $j('#toolbox-area');
            _widgetToolbar = $j('#widget-toolbar');
            _editorArea = $j('#editor-area');

            layoutTbar.render(_toolbarArea);
            podTbar.render(_toolbarArea);
            editor.render(_editorArea);

            wireEvents();

            console.log('Initialization complete.');
        }
    };
});