"use strict";

/*
 * NIGHTMODE represents module to switch to dark mode
 **/
var NIGHTMODE = function() {

    // in ms
    const WINK_TIMEOUT = 2000;
    const WINK_INTERVAL = 7000;

    let storageKey = "mode";
    let winkInterval, winkTimeout;

    function init() {
        // evaluate persisted state
        if (localStorage.getItem(storageKey)) {
            toggle();
        }
        // add events
        document.querySelectorAll(".custom-night-mode-toggle").forEach(function(node) {
            node.addEventListener('touchstart', toggle);
            node.addEventListener('click', toggle);
        });
    }

    function initNight() {
        let body = document.getElementsByTagName("body")[0]
        let toggles = document.querySelectorAll(".custom-night-mode-toggle")
        body.classList.replace("custom-day", "custom-night");
        // update icon
        toggles.forEach(function(node) {
            node.classList.replace("fa-moon-o", "fa-sun-o")
        });
        // update image
        AVATAR.setNight();
        // store in session
        localStorage.setItem(storageKey, "custom-night");
        triggerWinkLoop();
    }

    function triggerWinkLoop() {
        winkInterval = setInterval(function() {
            AVATAR.setNightWink();
            winkTimeout = setTimeout(function() {
                AVATAR.setNight();
            }, WINK_TIMEOUT);
        }, WINK_INTERVAL);
    }

    function stopWinkLoop() {
        clearInterval(winkInterval);
        clearTimeout(winkTimeout);
    }

    function initDay() {
        stopWinkLoop();
        let body = document.getElementsByTagName("body")[0]
        let toggles = document.querySelectorAll(".custom-night-mode-toggle")
        body.classList.replace("custom-night", "custom-day");
        toggles.forEach(function(node) {
            node.classList.replace("fa-sun-o", "fa-moon-o")
        });
        // update image
        AVATAR.setDay();
        // store in session
        localStorage.clear();
    }

    function toggle(event) {
        if (event) {
            event.preventDefault();
        }
        let body = document.getElementsByTagName("body")[0]
            // if day, switch to night  
        if (body.classList.contains("custom-day")) {
            initNight();
            return
        }
        // toggle other way arounds
        initDay();
    }

    //return an object that represents NIGHTMODE module
    return {
        init: init,
    }
}();