/**
 @class Pod widget provider
 */
define(['pods/text', 'pods/image'], function(TextPod, ImagePod) {

    return {
        name: 'Pods',
        items: [new TextPod(), new ImagePod()]
    };
});