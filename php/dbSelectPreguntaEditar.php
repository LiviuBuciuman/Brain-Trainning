<?php
header("Content-Type: application/json; charset=UTF-8");

$idPregunta = $_GET['idPregunta'];

$host = "localhost";
$username = "root";
$passwd = "";
$dbname = "braintrainning";

$conn = new mysqli("$host", "$username", "$passwd", "$dbname");

$query = $conn->query(
    "SELECT pregunta.id, pregunta.enunciado, pregunta.respuesta1, pregunta.respuesta2, 
            pregunta.respuesta3, pregunta.respuesta4, pregunta.respCorrecta, tema.nombre
            FROM pregunta 
            INNER JOIN tema 
            ON pregunta.idTema = tema.id
            WHERE pregunta.id = $idPregunta");

$lista = array();
$lista = $query->fetch_all(MYSQLI_ASSOC);

echo json_encode($lista, JSON_UNESCAPED_UNICODE);