<?php

$partido =$_REQUEST["partido"]; 
$votos =$_REQUEST["votos"]; 

$servername = "localhost";

$username = "Christian";

$password = "C4M4R4S4";

// Conexión a la base de datos:

$link = @new mysqli($servername, "Christian", "C4M4R4S4", "Christian");

if ($link->connect_errno) {

    die('Connect Error: ' . $link->connect_error);

}

// Consulta

$sql = "UPDATE elecciones SET Votos = '" . $votos . "' WHERE Partido ='" . $partido . "'";

$link->query($sql); 

echo  json_encode($sql);
echo '<br><button onclick="window.history.go(-1);">Volver</button>';


mysqli_close($link);

?>