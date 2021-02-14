"use strict";
/*
* list of positions
* these are taken partly from:
* https://siliconvalleyjobtitlegenerator.tumblr.com/    
*/
const POSITIONS = [
    "DOING STUFF",
    "BRAND STORY CONNECTOR",
    "UNIQUE EXPERIENCE CONSULTANsT",
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

/*
* onload trigger position swap with randomely selected position
*/
window.onload = function() {
    swapPosition();
    addNightToggle();
};

/**
 * Swap out position from declared POSITION list
 **/
function swapPosition() {
    var position = POSITIONS[Math.floor(Math.random()*POSITIONS.length)]
    document.querySelectorAll(".position").forEach(function(node) {
        node.innerHTML = position.toLowerCase()
    });
}

/**
 * Add night toggle to switch element
 */
function addNightToggle() {
    document.querySelectorAll(".custom-night-mode-toggle").forEach(function(node) {
        node.addEventListener ('touchstart', toggleMode);
        node.addEventListener ('click', toggleMode);
    });
}

/**
 * Toggle function for view mode
 * if currently day mode, switch to night and vice versa
 */
function toggleMode(event) {
    event.preventDefault();
    var body = document.getElementsByTagName("body")[0]
    var toggles =  document.querySelectorAll(".custom-night-mode-toggle")
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