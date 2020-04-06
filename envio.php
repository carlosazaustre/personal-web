<?php 
$mail = 'alex.menorca@gmail.com';
$name = $_POST['nombre'];
$email = $_POST['email'];
$subject = $_POST['asunto'];
$message = $_POST['msg'];

$header = "From: $email";

mail($mail, $subject, $message, $header);
echo "El mensaje se ha enviado correctamente";
?>
