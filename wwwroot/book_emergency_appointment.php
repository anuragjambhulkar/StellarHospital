<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Verify the CSRF token for security
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        echo "Invalid CSRF token.";
        exit;
    }

    // Retrieve and trim form data; using isset() for compatibility with older PHP versions
    $name     = trim(isset($_POST['app-name']) ? $_POST['app-name'] : '');
    $age      = trim(isset($_POST['app-age']) ? $_POST['app-age'] : '');
    $sex      = trim(isset($_POST['app-sex']) ? $_POST['app-sex'] : '');
    $contact  = trim(isset($_POST['app-contact']) ? $_POST['app-contact'] : '');
    $treatment= trim(isset($_POST['app-treatment']) ? $_POST['app-treatment'] : '');

    // Validate required fields
    if (empty($name) || empty($age) || empty($sex) || empty($contact) || empty($treatment)) {
        echo "All fields are required.";
        exit;
    }

    // Validate Patient's Age (should be a positive number within a reasonable range)
    if (!is_numeric($age) || $age <= 0 || $age > 120) {
        echo "Invalid age input.";
        exit;
    }

    // Validate Sex field (ensure it's one of the allowed values)
    $allowedSex = ['male', 'female', 'other'];
    if (!in_array(strtolower($sex), $allowedSex)) {
        echo "Invalid entry for sex.";
        exit;
    }

    // Compose the email details
    $to      = "care@stellarhospital.com";  // Recipient email address
    $subject = "Emergency Appointment Request";

    $body  = "You have received a new emergency appointment request from your website.\n\n";
    $body .= "Patient's Name: " . $name . "\n";
    $body .= "Patient's Age: " . $age . "\n";
    $body .= "Sex: " . $sex . "\n";
    $body .= "Contact Number: " . $contact . "\n\n";
    $body .= "Treatment Details:\n" . $treatment . "\n";

    // Set email headers. Since there is no customer email, both "From" and "Reply-To" use the hospital's email.
    $headers  = "From: care@stellarhospital.com\r\n";
    $headers .= "Reply-To: care@stellarhospital.com\r\n";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Emergency appointment request sent successfully!";
    } else {
        echo "There was an error sending your emergency appointment request.";
    }
} else {
    echo "Invalid request method.";
}
?>