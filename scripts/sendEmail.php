<?php

/*
File: sendEmail.php
Zachary Muranaka
Gets information from the form and sends an email to my email address
*/

    // $_POST is an an array that holds information submitted through the form
    if(isset($_POST['submit'])) // Checks if the form was posted
    {
        // Get the information from the $_POST array
        $userName = $_POST['name'];
        $userMail = $_POST['mail'];
        $emailSubject = $_POST['subject'];
        $emailMessage = $_POST['message'];

        $myEmail = "zacharymuranaka@mail.weber.edu";
        $headers = "From: ".$userMail;

        // Concatenate strings to create the text of the email
        $text = "You have received an email from ".$userName.".\n\n".$emailMessage;

        mail($myEmail, $emailSubject, $text, $headers); // Sends the email to me

        header("Location: ../mailsent.html"); // Redirect to a web page that tells the user that the mail was sent
    }

?>
