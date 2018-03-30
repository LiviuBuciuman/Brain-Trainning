<?php
header("Content-Type: application/json");
include_once "dbConfig.php";

$nombreLog = $_GET["nombreLog"];
$passwordLog = $_GET["passwordLog"];

function listaUsuarios($nombreLog, $passwordLog)
{

    global $enlace;
    mysqli_set_charset($enlace, 'utf8');

    $result = mysqli_query($enlace,
        "SELECT username, password FROM usuario WHERE username = '$nombreLog' AND password = '$passwordLog'");
    $lista = [];
    while ($fila = mysqli_fetch_array($result)) {
        $lista[] = $fila;
    }
    return $lista;
}

$resultado = listaUsuarios($nombreLog, $passwordLog);
echo json_encode($resultado, JSON_UNESCAPED_UNICODE);