<?php

$Comunidad =$_REQUEST["comunidad"]; 

$servername = "localhost";

$username = "Christian";

$password = "C4M4R4S4";

// Conexión a la base de datos:

$link = @new mysqli($servername, "Christian", "C4M4R4S4", "Christian");

if ($link->connect_errno) {

    die('Connect Error: ' . $link->connect_error);

}

// Consulta

 

$sql = "SELECT * from Provincias WHERE Comunidad = '" . $Comunidad . "'";
 

$resultado = $link->query($sql); 

 

$filas=$resultado->num_rows;

 

for ($i=0;$i<$filas;$i++){

    $fila = mysqli_fetch_array($resultado);

    $miArray[$i]= array("Provincia"=>utf8_encode($fila["Provincia"]),"Extension"=>$fila["Extension"]);

}

 

echo  json_encode($miArray);

 

mysqli_close($link);

 

?>