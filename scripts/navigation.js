"use strict";

/*
File: navigation.js
Zachary Muranaka
Allows the nav styles to change depending on the viewport
*/

var burgerNav = document.getElementById("burgerNav");
var navLinks = document.getElementsByClassName("navLink"); // Array of the nav links
var menuIsOpen = false; // Boolean value that keeps track of whether the menu is open or not

// When we load, resize, or change orientation we may have to change the display of the nav links
window.addEventListener("load", changeStyles);
window.addEventListener("resize", changeStyles);
window.addEventListener("orientationchange", changeStyles);

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

// Changes the nav styles if the viewport's aspect ratio has changed to below or above 4/3
function changeStyles()
{
    if(window.innerWidth / window.innerHeight >= 4/3)
    {
        for(let i = 0, offset = 0; i < navLinks.length; i++, offset+=2)
            navLinks[i].style.top = offset + "em";
        
        openNavMenu();
    }
    else
    {
        for(let i = 0, offset = 3; i < navLinks.length; i++, offset+=2)
            navLinks[i].style.top = offset + "em";
        
        closeNavMenu();
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
    document.getElementById("pageNav").style.display = "none";
    menuIsOpen = false; // The menu is now closed
}

function openNavMenu()
{
    document.getElementById("pageNav").style.display = "block";
    menuIsOpen = true; // The menus is now open
}
