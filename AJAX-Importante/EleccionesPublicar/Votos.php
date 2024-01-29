<?php

$servername = "localhost";

$username = "Christian";

$password = "C4M4R4S4";

// Conexión a la base de datos:

$link = @new mysqli($servername, "Christian", "C4M4R4S4", "Christian");

if ($link->connect_errno) {

    die('Connect Error: ' . $link->connect_error);

}

// Consulta

$sql = "SELECT * from elecciones ORDER BY votos DESC";
 

$resultado = $link->query($sql); 

 

$filas=$resultado->num_rows;

 

for ($i=0;$i<$filas;$i++){

    $fila = mysqli_fetch_array($resultado);

    $miArray[$i]= array("Partido"=>$fila["Partido"],"Votos"=>$fila["Votos"]);

}

 

echo  json_encode($miArray);

 

mysqli_close($link);

?>