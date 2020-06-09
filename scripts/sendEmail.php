<?php

/*
File: sendEmail.php
Zachary Muranaka
Validates that the form was submitted correctly and then sends the email to my email address
*/

if(formWasFilledOutProperly())
{
    // Extract the values from the $_POST array
    extract($_POST, EXTR_PREFIX_ALL, 'form');

    $myEmail = 'zacharymuranaka@mail.weber.edu';
    $headers = "From: " . sanitize($form_mail, TRUE);

    // Concatenate the text of the email
    $text = "You have received an email from " . sanitize($form_name, FALSE) . ".\n\n" . sanitize($form_message, FALSE);

    // Send email and redirect to a page that says if the mail was sent or not
    if(mail($myEmail, sanitize($form_subject, FALSE), $text, $headers)) header("Location: ../mailsent.html");
    else header("Location: ../mailnotsent.html");
}
else header("Location: ../mailnotsent.html");

// Returns whether the fields were filled out properly and the submit button was clicked
function formWasFilledOutProperly()
{
    return isset($_POST['name']) && !empty($_POST['name']) &&
           isset($_POST['mail']) && !empty($_POST['mail']) && validateMail($_POST['mail']) &&
           isset($_POST['subject']) && !empty($_POST['subject']) &&
           isset($_POST['message']) && !empty($_POST['message']) &&
           isset($_POST['submit']);
}

// Removes special characters (like HTML tags) from the user's input
function sanitize($string, $email)
{
    return $email ? filter_var($string, FILTER_SANITIZE_EMAIL) : filter_var($string, FILTER_SANITIZE_STRING);
}

// Returns whether the user input a valid email address
function validateMail($userInput)
{
    if($userInput === "") return FALSE;
    elseif(!((strpos($userInput, '@') > 0) && (strpos($userInput, '.') > strpos($userInput, '@'))) ||
           preg_match("/[^\w.@-]/", $userInput)) return FALSE;
    return TRUE; 
}
