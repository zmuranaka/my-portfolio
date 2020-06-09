"use strict";

/*
File: formValidation.js
Zachary Muranaka
Handles client-side form validation for my email form
*/

var failMessage = ""; // Tracks the errors the user made when submitting the form

// Runs when the form is submitted (before the PHP)
function validate(form)
{
    failMessage = validateName(form.name.value) +
                  validateMail(form.mail.value) +
                  validateSubject(form.subject.value) +
                  validateMessage(form.message.value);
    
    if(failMessage === "") return true; // There were no errors
    alert(failMessage + "Try again.");
    return false; // The user has to fix the errors before they can submit the form
}

// Validates the name the user entered
function validateName(userInput) { return userInput === "" ? "You did not enter your name.\r\n" : ""; }

// Validates the email address the user entered
function validateMail(userInput)
{
    if(userInput === "") return "You did not enter your email address.\r\n";
    
    /*
     * Regular expression that tests if the email address they submitted is valid
     * It first tests if there is an @ symbol at a position greater than the first
     * It also tests if there is a . symbol after the @ symbol (i.e. address@website.com is valid)
     * It finally uses a regular expression to test if the email address contains any invalid characters
     * Invalid characters are anything besides a-z, A-Z, 0-9, _, ., @, and -
     */
    else if(!((userInput.indexOf('@') > 0) && (userInput.indexOf('.') > userInput.indexOf('@'))) || /[^\w.@-]/.test(userInput))
        return "The email address you entered is invalid.\r\n";
    
    return ""; 
}

// Validates the subject of the email the user entered
function validateSubject(userInput) { return userInput === "" ? "You did not enter the subject of the email.\r\n" : ""; }

// Validates the message of the email the user entered
function validateMessage(userInput) { return userInput === "" ? "You did not enter the message of the email.\r\n" : ""; }
