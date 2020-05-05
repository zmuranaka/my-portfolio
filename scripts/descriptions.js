"use strict";

/*
File: descriptions.js
Zachary Muranaka
Handles how the descriptions display depending on the viewport
*/

var videos = document.getElementsByTagName("video"); // Array of the videos
var descriptions = document.getElementsByClassName("description"); // Array of the descriptions

// Add event listners to the window
window.addEventListener("load", checkDescriptions);
window.addEventListener("resize", checkDescriptions);

// Displays the corresponding description if the video is not displayed or the window is tall enough
function checkDescriptions()
{
    for(let i = 0; i < videos.length; i++)
    {
        if(!videos[i].offsetHeight) // The video is not displaying
        {
            descriptions[i].style.display = "flex";
            descriptions[i].style.fontSize = "3vh";
        }
        else if(window.innerHeight > 599) // The window is tall enough
        {
            descriptions[i].style.display = "flex";
            descriptions[i].style.fontSize = "2vh";
        }
        else descriptions[i].style.display = "none";
    }
}
