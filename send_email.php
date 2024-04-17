<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = "vkavyachandrika@gmail.com";

    // Set email subject
    $subject = "New message from contact form";

    // Compose email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Compose email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
        header("Location: contact.html?status=success");
        exit();
    } else {
        // Email sending failed
        header("Location: contact.html?status=error");
        exit();
    }
} else {
    // If the form is not submitted, redirect back to the contact page
    header("Location: contact.html");
    exit();
}
?>
