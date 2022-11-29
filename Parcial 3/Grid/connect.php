<?php
$con = mysqli_connect("localhost","root","","playlist") or die ("no acceso al localhost");
$consulta = "select * from playlist.canciones";
$registros = mysqli_query($con,$consulta) or die ("problemas en el select");

// $resultado = mysqli_fetch_all($registros);

$array = array();
while($row = mysqli_fetch_assoc($registros)){
    $array[] = $row;
}

mysqli_close($con);

echo json_encode($array);
?>