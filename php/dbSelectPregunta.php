<?php
header("Content-Type: application/json; charset=UTF-8");

$idTema = $_GET['idTema'];
$idPregunta = $_GET['idPregunta'];

$host = "localhost";
$username = "root";
$passwd = "";
$dbname = "braintrainning";

$conn = new mysqli("$host", "$username", "$passwd", "$dbname");

$query = $conn->query(
    "SELECT * 
            FROM pregunta 
            WHERE id = $idPregunta 
            AND idTema = $idTema"
);

$lista = array();
$lista = $query->fetch_all(MYSQLI_ASSOC);

echo json_encode($lista, JSON_UNESCAPED_UNICODE);