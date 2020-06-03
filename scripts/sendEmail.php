<?php

/*
File: sendEmail.php
Zachary Muranaka
Gets information from the form and sends an email to my email address
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

// Returns whether all the input values were set
function formWasFilledOutProperly()
{
    return isset($_POST['name']) && !empty($_POST['name']) &&
           isset($_POST['mail']) && !empty($_POST['mail']) &&
           isset($_POST['subject']) && !empty($_POST['subject']) &&
           isset($_POST['message']) && !empty($_POST['message']) &&
           isset($_POST['submit']);
}

// Removes special characters (like HTML tags) from the user's input
function sanitize($string, $email)
{
    return $email ? filter_var($string, FILTER_SANITIZE_EMAIL) : filter_var($string, FILTER_SANITIZE_STRING);
}
