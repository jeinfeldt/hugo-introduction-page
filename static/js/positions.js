"use strict";

/*
* POSITIONS represents module to swap the positions present in the template
**/
var POSITIONS = function() {
    /*
    * list of positions
    * these are taken partly from:
    * https://siliconvalleyjobtitlegenerator.tumblr.com/    
    */
    let values = [
        "DOING STUFF",
        "BRAND STORY CONNECTOR",
        "UNIQUE EXPERIENCE CONSULTANT",
        "MOBILE INTIMACY PROCTOR",
        "DECENTRALIZED INFORMATION ASSET STRATEGIST",
        "BROGRAMMING SHAMAN",
        "IN-HOUSE TECH WIZARD",
        "CURATOR OF DATAFICATION",
        "HIGH PRIEST OF BITCOINS",
        "CLICK-THROUGH FELLOW",
        "TSAR OF THE REDDIT-SPHERE",
        "GRAND POOBAH OF VIDEO EXPERIENCE",
        "HARBINGER OF DISRUPTIVE INNOVATION",
        "DW7 MARIO KART CHAMPION 2019",
        "DESTROYER OF BLUE SHELLS",
    ];

    function init() {
        swap();
    }

    function swap() {
        let position = values[Math.floor(Math.random()*values.length)]
        document.querySelectorAll(".position").forEach(function(node) {
            node.innerHTML = position.toLowerCase()
        });
    }
    //return an object that represents POSITIONS module
    return {
         init: init,
    }
}();