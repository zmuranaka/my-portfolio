"use strict";

/*
File: scroll.js
Zachary Muranaka
Handles the scrolling in my portfolio
*/

var topRow = document.getElementById("mobileTopRow");
var navLinks = document.getElementsByClassName("navLink"); // Array of the nav links
var downArrows = document.getElementsByClassName("downArrow"); // Array of the down arrows
var upArrows = document.getElementsByClassName("upArrow"); // Array of the up arrows
var hypergeomPosition;
var rpsPosition;
var youtubePosition;
var liarsDicePosition;
var contactPosition;
var positionToScrollTo;
var scrollTime; // This keeps track of the setTimeout while scrolling

// When we load or resize the window we have to set the positions
window.addEventListener("load", setPositions);
window.addEventListener("resize", setPositions);

// Sets the variables that keep track of where objects are in the website
function setPositions()
{
    var onePageHeight = document.getElementById("landingPage").offsetHeight; // The height of one page in the website
    hypergeomPosition = onePageHeight;
    rpsPosition = onePageHeight * 2;
    youtubePosition = onePageHeight * 3;
    liarsDicePosition = onePageHeight * 4;
    contactPosition = onePageHeight * 5;
}

// We stop scrolling if the window changes orientation
window.addEventListener("orientationchange", function() { clearTimeout(scrollTime); });

// Add event listeners to the nav links
for(let i = 0; i < navLinks.length; i++)
{
    navLinks[i].addEventListener("click",
    function()
    {
        clearTimeout(scrollTime); // We have a new place to scroll so any previous scroll scrollTimes are cleared
        determineScrollPosition(this);
        smoothScroll(upOrDown());
    });
}

// Add event listeners to the down arrows
for(let i = 0; i < downArrows.length; i++)
{
    downArrows[i].addEventListener("mouseenter", function() { this.src = "images/blueDownArrow.png"; });
    downArrows[i].addEventListener("mouseleave", function() { this.src = "images/blackDownArrow.png"; });
    downArrows[i].addEventListener("mousedown", function() { this.src = "images/yellowDownArrow.png"; });
    downArrows[i].addEventListener("mouseup", function() { this.src = "images/blueDownArrow.png"; });
    downArrows[i].addEventListener("click",
    function()
    {
        clearTimeout(scrollTime); // We have a new place to scroll so any previous scroll scrollTimes are cleared
        determineScrollPosition(this);
        smoothScroll(upOrDown());
    });
}

// Add event listeners to the up arrows
for(let i = 0; i < upArrows.length; i++)
{
    upArrows[i].addEventListener("mouseenter", function() { this.src = "images/blueUpArrow.png"; });
    upArrows[i].addEventListener("mouseleave", function() { this.src = "images/blackUpArrow.png"; });
    upArrows[i].addEventListener("mousedown", function() { this.src = "images/yellowUpArrow.png"; });
    upArrows[i].addEventListener("mouseup", function() { this.src = "images/blueUpArrow.png"; });
    upArrows[i].addEventListener("click",
    function()
    {
        clearTimeout(scrollTime); // We have a new place to scroll so any previous scroll scrollTimes are cleared
        positionToScrollTo = 0;
        smoothScroll(upOrDown());
    });
}

// Determines where we need to scroll based on what was clicked
function determineScrollPosition(object)
{
    if(object === navLinks[0] || object === downArrows[0]) positionToScrollTo = hypergeomPosition;
    else if(object === navLinks[1] || object === downArrows[1]) positionToScrollTo = rpsPosition;
    else if(object === navLinks[2] || object === downArrows[2]) positionToScrollTo = youtubePosition;
    else if(object === navLinks[3] || object === downArrows[3]) positionToScrollTo = liarsDicePosition;
    else if(object === navLinks[4] || object === downArrows[4]) positionToScrollTo = contactPosition;
}

// Recursive function that does a smooth scroll
function smoothScroll(direction)
{
    if(weNeedToScrollAgain())
    {
        // The setTimeout creates the smooth scroll effect
        scrollTime = setTimeout(
        function()
        {
            window.scrollBy(0, direction ? 6 : -6); // Scroll by 6 pixels
            smoothScroll(direction); // Recursively call this function
        }, 0); 
    }
}

// Returns whether we need to scroll up or down (true means down)
function upOrDown()
{
    return topRow.offsetHeight?
    window.pageYOffset < positionToScrollTo - 48 :
    window.pageYOffset < positionToScrollTo;
}

// Returns whether we need to scroll again or not (true means we do)
function weNeedToScrollAgain()
{
    return topRow.offsetHeight?
    (window.pageYOffset < positionToScrollTo - 54 || window.pageYOffset > positionToScrollTo - 48) && !weAreAtTheTop() :
    (window.pageYOffset < positionToScrollTo - 6 || window.pageYOffset > positionToScrollTo) && !weAreAtTheTop();
}

// Returns whether we are at the top of the page or not (true means we are)
function weAreAtTheTop() { return positionToScrollTo === 0 && window.pageYOffset === 0; }
