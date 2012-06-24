/**
 @class Layout widget provider
 */
define(['layouts/single', 'layouts/twoCol'], function(SingleLayoutDefinition, TwoColLayoutDefinition) {

    return {
        name: 'Layouts',
        items: [SingleLayoutDefinition, TwoColLayoutDefinition]
    };
});