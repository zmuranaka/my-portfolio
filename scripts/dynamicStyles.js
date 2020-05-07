"use strict";

/*
File: dynamicStyles.js
Zachary Muranaka
Allows the styles to change depending on the viewport
*/

var dynamicStyles = document.createElement("style"); // A dynamic CSS stylesheet
document.head.appendChild(dynamicStyles);

var burgerNav = document.getElementById("burgerNav");
var navLinks = document.getElementsByClassName("navLink"); // Array of the nav links
var menuIsOpen = false; // Boolean value that keeps track of whether the menu is open or not

// When we load, resize, or change orientation we may have to change the display of the nav links
window.addEventListener("load", changeStyles);
window.addEventListener("resize", changeStyles);
window.addEventListener("orientationchange", changeStyles);

// Add event listeners to the burger nav
burgerNav.addEventListener("mouseenter",
function()
{
    this.src = "images/blackBurgerNav.png";
    this.style.background = "rgb(216, 216, 255)";
});
burgerNav.addEventListener("mouseleave",
function()
{
    this.src = "images/whiteBurgerNav.png";
    this.style.background = "blue";
});
burgerNav.addEventListener("mousedown", function() { this.style.background = "yellow"; });
burgerNav.addEventListener("mouseup", function() { this.style.background = "rgb(216, 216, 255)"; });
burgerNav.addEventListener("click", burgerNavClicked);

// Changes the dynamic styles if the viewport's aspect ratio has changed to below or above 4/3
function changeStyles()
{
    if(window.innerWidth / window.innerHeight >= 4/3)
    {
        navLinks[0].style.top = "0";
        navLinks[1].style.top = "2em";
        navLinks[2].style.top = "4em";
        navLinks[3].style.top = "6em";
        navLinks[4].style.top = "8em";
        navLinks[5].style.top = "10em";

        dynamicStyles.innerHTML =
        "\
        .navLink {\
            display: block;\
            width: auto;\
            padding-left: 0.5em;\
            font-size: 1.5vw;\
            color: rgb(0, 0, 204);\
            background: none;\
        }\
        .navLink:hover {\
            background: none;\
            color: rgb(0, 255, 255);\
            text-decoration: underline;\
        }\
        .navLink:active {\
            background: none;\
            color: yellow;\
        }\
        #mobileTopRow { display: none }\
        #navBar { display: block }\
        span {\
            width: 55%;\
            margin: 4vh auto;\
        }\
        #landingPage .downArrow { top: 85vh }\
        section h2 { font-size: 6vh; }\
        .formRow, textarea { width: 55% }\
        label { width: 15% }\
        .formRow{ display: flex }\
        input[type='text'] {\
            width: 80%;\
            margin-left: 5%;\
            text-align: left;\
        }\
        #sendBtn {\
            width: 55%;\
            font-size: 5vh;\
        }\
        ";

        menuIsOpen = false;
    }
    else
    {
        navLinks[0].style.top = "3em";
        navLinks[1].style.top = "5em";
        navLinks[2].style.top = "7em";
        navLinks[3].style.top = "9em";
        navLinks[4].style.top = "11em";
        navLinks[5].style.top = "13em";
        dynamicStyles.innerHTML = "";
    }
}

// If the menu is open, it closes it, and if it is closed, it opens it
function burgerNavClicked()
{
    if(menuIsOpen) closeNavMenu();
    else openNavMenu();
}

function closeNavMenu()
{
    dynamicStyles.innerHTML = "#navBar { display: none }";
    menuIsOpen = false; // The menu is now closed
}

function openNavMenu()
{
    dynamicStyles.innerHTML = "#navBar { display: block }";
    menuIsOpen = true; // The menus is now open
}
