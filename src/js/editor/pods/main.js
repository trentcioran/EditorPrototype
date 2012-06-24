/**
 @class Pod widget provider
 */
define(['pods/text', 'pods/image'], function(TextPodDefinition, ImagePodDefinition) {

    return {
        name: 'Pods',
        items: [TextPodDefinition, ImagePodDefinition]
    };
});