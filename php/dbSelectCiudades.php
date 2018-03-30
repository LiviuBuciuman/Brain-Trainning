<?php
header("Content-Type: application/json");
include_once "dbConfig.php";

$code = $_GET["codigoPais"];
function listaCiudades($code)
{

    global $enlace;
    mysqli_set_charset($enlace, 'utf8');

    $result = mysqli_query($enlace, "SELECT ID, Name FROM city WHERE CountryCode = '$code' ORDER BY name ASC ");
    $lista = [];
    while ($fila = mysqli_fetch_array($result)) {
        $lista[] = $fila;
    }
    return $lista;
}

$resultado = listaCiudades($code);
echo json_encode($resultado, JSON_UNESCAPED_UNICODE);