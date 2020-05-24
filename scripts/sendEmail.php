<?php

/*
File: sendEmail.php
Zachary Muranaka
Gets information from the form and sends an email to my email address
*/

    if(isset($_POST['submit'])) // Checks if the form was posted
    {
        // Extract the values from the $_POST array
        extract($_POST, EXTR_PREFIX_ALL, 'form');

        $myEmail = 'zacharymuranaka@mail.weber.edu';
        $headers = "From: " . $form_mail;

        // Concatenate the text of the email
        $text = "You have received an email from " . $form_name . ".\n\n" . $form_message;

        mail($myEmail, $form_subject, $text, $headers); // Sends the email to me

        header("Location: ../mailsent.html"); // Redirect to a web page that tells the user that the mail was sent
    }
