<?php
// Replace with your email address
$to = "orjimiracle3@gmail.com";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $service = $_POST['service'];
  $message = $_POST['message'];

  $subject = "New Contact Form Submission";
  $message = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    echo "<script>alert('Your message has been sent successfully!'); window.location.href = 'contact.html';</script>";
  } else {
    echo "<script>alert('Error sending email. Please try again later.'); window.location.href = 'contact.html';</script>";
  }
}
?>