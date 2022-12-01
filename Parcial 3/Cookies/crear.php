<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies</title>
</head>
<body>
<?php
    $today = date('d/m/Y H:i:s');
    if(isset($_COOKIE['ultvisita'])){
        printf("ultima visita: %s", $_COOKIE['ultvisita']);
        setcookie("ultvisita", $today, time() + (7*24*60*60));
    }
    else {
        printf("no hay cookie de ultima visita<br>");
        setcookie("ultvisita", $today, time() + (7*24*60*60));
    }
?>
</body>
</html>