<?php

$seccion =$_REQUEST["seccion"]; 

$servername = "localhost";

$username = "Christian";

$password = "C4M4R4S4";

// Conexión a la base de datos:

$link = @new mysqli($servername, "Christian", "C4M4R4S4", "Christian");

if ($link->connect_errno) {

    die('Connect Error: ' . $link->connect_error);

}

if ($_REQUEST["cerrar"] != null) {
    $sqlCerrarTodo = "UPDATE supermercado SET Numero = 0";
    $link->query($sqlCerrarTodo); 
}
// Consulta

$sql = "UPDATE supermercado SET Numero = Numero + 1 WHERE Seccion = '" . $seccion . "'";
$sql2 = "SELECT Numero FROM supermercado WHERE Seccion = '" . $seccion . "'";

$link->query($sql); 

$resultado = $link->query($sql2); 

$filas=$resultado->num_rows;

 

for ($i=0;$i<$filas;$i++){

    $fila = mysqli_fetch_array($resultado);

    $miArray[$i]= array("Numero"=>$fila["Numero"]);

}

 

echo  json_encode($miArray);

mysqli_close($link);

?>