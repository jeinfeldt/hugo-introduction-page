"use strict";

/*
 * AVATAR represents module to interact with avatar
 **/
var AVATAR = function() {
    /*
     * possible image values    
     */
    const PATH = "/images/avatars/";
    const DAY_AVATAR = "daymode.png";
    const NIGHT_AVATAR = "nightmode.png";
    const NIGHT_WINK_AVATAR = "wink.png";

    function setDay() {
        swap(PATH + DAY_AVATAR);
    }

    function setNight() {
        swap(PATH + NIGHT_AVATAR);
    }

    function setNightWink() {
        swap(PATH + NIGHT_WINK_AVATAR);
    }
    // swap avatar to given source
    function swap(src) {
        document.querySelectorAll(".custom-avatar").forEach(function(node) {
            node.src = src;
        });
    }
    //return an object that represents AVATAR module
    return {
        setDay: setDay,
        setNight: setNight,
        setNightWink: setNightWink,
    }
}();