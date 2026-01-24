<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Verify the CSRF token for security
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        echo "Invalid CSRF token.";
        exit;
    }

    // Retrieve and trim form data using isset() for compatibility with older PHP versions
    $name    = trim(isset($_POST['ctn-name']) ? $_POST['ctn-name'] : '');
    $email   = trim(isset($_POST['ctn-email']) ? $_POST['ctn-email'] : '');
    $message = trim(isset($_POST['ctn-message']) ? $_POST['ctn-message'] : '');

    // Basic validation: ensure no field is empty
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    // Validate the email address format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Prepare email details
    $to      = "care@stellarhospital.com";  // Recipient email
    $subject = "Website Query";               // Email subject

    $body  = "You have received a new query from your website contact form.\n\n";
    $body .= "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message:\n" . $message . "\n";

    // Set headers: "From" uses the hospital's email and "Reply-To" is the visitor's email
    $headers  = "From: care@stellarhospital.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an error sending your message.";
    }
} else {
    echo "Invalid request method.";
}
?>