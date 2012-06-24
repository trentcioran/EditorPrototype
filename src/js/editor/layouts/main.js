/**
 @class Layout widget provider
 */
define(['layouts/single', 'layouts/twoCol'], function(SingleLayout, TwoColLayout) {

    return {
        name: 'Layouts',
        items: [ new SingleLayout(), new TwoColLayout()]
    };
});