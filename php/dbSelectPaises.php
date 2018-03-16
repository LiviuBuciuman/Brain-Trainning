<?php
header("Content-Type: application/json");
include_once "dbConfig.php";

function listaPaises()
{
    global $enlace;
    mysqli_set_charset($enlace, 'utf8');

    $result = mysqli_query($enlace, "SELECT Code, Name FROM country ORDER BY Name ASC ");
    $lista = [];
    while ($fila = mysqli_fetch_array($result)) {
        $lista[] = $fila;
    }
    return $lista;
}

$resultado = listaPaises();
echo json_encode($resultado, JSON_UNESCAPED_UNICODE);
