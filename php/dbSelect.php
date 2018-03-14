<?php
header("Content-Type: application/json");
include_once "dbConfig.php";

function listado()
{
    global $enlace;
    mysqli_set_charset($enlace, 'utf8');

    $result = mysqli_query($enlace, "SELECT * FROM country");
    $lista = [];
    while ($fila = mysqli_fetch_array($result)) {
        $lista[] = $fila;
    }
    return $lista;
}

$resultado = listado();
echo json_encode($resultado, JSON_UNESCAPED_UNICODE);

?>