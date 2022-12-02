<?php
session_start();
$user = $_POST['usuario'];
$pw = $_POST['contraseña'];
if(isset($_SESSION['usuario'])){
    printf("sesión guardada anteriormente<br>");
    printf("hola de nuevo ".$_SESSION['usuario']);
} else {
    $_SESSION['usuario'] = $user;
    printf("nueva sesión<br>");
    printf("hola %s",$user); 
}
?>