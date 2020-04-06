
<?php 
$myemail = 'alex.menorca@gmail.com';
$name = $_POST['nombre'];
$email = $_POST['email'];
$subject = $_POST['asunto'];
$message = $_POST['msg'];

$email_subject = "Nuevo mensaje: $subject";
$email_body = "Has recibido un nuevo mensaje. \n Nombre: $name \n Correo: $email \n Mensaje: \n $message";
$headers = "From: $email";

mail($myemail, $email_subject, $email_body, $headers);
echo "El mensaje se ha enviado correctamente";
?>
