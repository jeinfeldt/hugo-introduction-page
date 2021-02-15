"use strict";

/*
* NIGHTMODE represents module to switch to dark mode
**/
var NIGHTMODE = function() {

    function init() {
        document.querySelectorAll(".custom-night-mode-toggle").forEach(function(node) {
            node.addEventListener ('touchstart', toggle);
            node.addEventListener ('click', toggle);
        });
    }

    function toggle(event) {
        event.preventDefault();
        let body = document.getElementsByTagName("body")[0]
        let toggles =  document.querySelectorAll(".custom-night-mode-toggle")
        // if day, switch to night  
        if (body.classList.contains("custom-day")) {
            body.classList.replace("custom-day", "custom-night");
            // update icon
            toggles.forEach(function(node) {
                node.classList.replace("fa-moon-o", "fa-sun-o")
            });
            // update image
            document.querySelectorAll(".custom-avatar").forEach(function(node) {
                node.src = "images/avatars/nightmode.png";
            });
            return
        }
        // toggle other way arounds
        body.classList.replace("custom-night", "custom-day");
        toggles.forEach(function(node) {
            node.classList.replace("fa-sun-o", "fa-moon-o")
        });
        // update image
        document.querySelectorAll(".custom-avatar").forEach(function(node) {
            node.src = "images/avatars/daymode.png";
        });
    }

    //return an object that represents NIGHTMODE module
    return {
         init: init,
    }
}();