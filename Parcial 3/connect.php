<?php
$serv = "localhost";
$db = "playlist";
$user = "root";
$passw = "";

$con = mysqli_connect($serv,$user,$passw,$db) or die ("no acceso al localhost");
$consulta = "select * from canciones";
$registros = mysqli_query($con,$consulta) or die ("problemas en el select");

$resultado = mysqli_fetch_all($registros);

mysqli_close($con);

echo json_encode($resultado);
?>