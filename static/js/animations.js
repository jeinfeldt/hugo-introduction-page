"use strict";

/*
 * ANIMATIONS represents module to swap sprinkle some animations in the site
 **/
var ANIMATIONS = function() {

    // animation for interactive elements
    function init() {
        document.querySelectorAll(".custom-toggle").forEach(function(node) {
            let tmp = function(_) {
                anime({
                    targets: node,
                    rotate: '1turn',
                    duration: 2000,
                    complete: function() {
                        node.style.transform = "none";
                    },
                });
            }
            node.addEventListener('click', tmp);
            node.addEventListener('touchstart', tmp);
        });
    }

    //return an object that represents ANIMATIONS module
    return {
        init: init,
    }
}();