
require.config({
    'baseUrl': '/js/editor',
    "packages": [

        /* EDITOR */

        'core',
        'layouts',
        'pods',

        /* DEPENDENCIES*/

        {
            name: 'jquery',
            location: '/js/dependency/jquery',
            main: 'jquery.js'
        },
        {
            name: 'jqueryui',
            location: '/js/dependency/jquery',
            main: 'jquery-ui-1.8.21.custom.min.js'
        },
        {
            name: 'prototype',
            location: '/js/dependency/prototype',
            main: 'prototype.js'
        },
        {
            name: 'bootstrap',
            location: '/js/dependency/bootstrap',
            main: 'bootstrap.js'
        },
        {
            name: 'knockout',
            location: '/js/dependency/knockout',
            main: 'knockout.js'
        },
        {
            name: 'ckeditor',
            location: '/js/dependency/ckeditor',
            main: 'ckeditor.js'
        }
    ]
});

// Start the main app logic.
requirejs(['jquery', 'jqueryui', 'prototype', 'bootstrap', 'knockout', 'ckeditor', 'core'],
    function   ($j, jqUi, $, b, ko, ck, core) {
        console.log('all loaded!');

        CKEDITOR.replace( '_placeholder',
            {
                sharedSpaces :
                {
                    top : 'topSpace'
                },
                toolbar: [
                    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','TextColor','BGColor','-','RemoveFormat' ] },
                    { name: 'paragraph',   items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
                    { name: 'clipboard',   items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
                    { name: 'insert',      items : [ 'Image','Table','HorizontalRule','Smiley' ] },
                    { name: 'styles',      items : [ 'Styles','Format','Font','FontSize' ] },
                    { name: 'links',       items : [ 'Link','Unlink','Anchor' ] },
                    { name: 'document',    items : [ 'Source' ] }
                ]
            });

        var $j = jQuery.noConflict();
        $j(document).ready(function(){
            $j('#_placeholder').detach();
            $j('#ck__placeholder').detach();

            $j('#editor-area')
                .css({ height: '500px' })
                .droppable({
                    drop: function(evt, ui) {

                    }
                });

            $j('.toolbar-element').draggable({ opacity: 0.8, helper: 'clone', revert: 'invalid' });
            $j('.toolbox').selectable({ filter: '.toolbar-element' });
        });
    });
