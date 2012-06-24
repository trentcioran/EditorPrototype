
require.config({

    "packages": [

        /* EDITOR */
        {
            name: 'core',
            location: '/js/editor/core'
        },
        {
            name: 'layouts',
            location: '/js/editor/layouts'
        },
        {
            name: 'pods',
            location: '/js/editor/pods'
        }
    ],
    paths: {
        'jquery': 'dependency/jquery/jquery',
        'jqueryui': 'dependency/jquery/jqueryui',
        'bootstrap': 'dependency/bootstrap/bootstrap',
        'prototype': 'dependency/prototype/prototype',
        'knockout': 'dependency/knockout/knockout',
        'mustache': 'dependency/mustache/mustache',
        'ckeditor': 'dependency/ckeditor/ckeditor'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'jqueryui': ['jquery'],
        /* UI COMPONENTS, BASE STYLES AND LAYOUT */
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        /* CLASS-INHERITANCE SUPPORT */
        'prototype': {
            deps: ['bootstrap'],
            exports: 'Prototype'
        },
        /* MVVM SSUPPORT */
        'knockout': {
            exports: 'ko'
        },
        /* TEMPLATING ENGINE */
        'mustache': {
            exports: 'Mustache'
        },
        'ckeditor': {
            exports: 'CKEDITOR'
        }
    }
});

// Start the main app logic.
requirejs(['jquery', 'jqueryui', 'prototype', 'mustache', 'bootstrap', 'knockout', 'ckeditor', 'core'],
    function   ($j, jqUi, $, mustache, b, ko, ck, editor) {
        console.log('All dependencies loaded!');

        jQuery.noConflict();

        editor.initialize($j('#main-container'));
    });
