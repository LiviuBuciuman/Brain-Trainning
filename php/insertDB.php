<?php

require_once "dbConfig.php";

$username = $_POST["nombreReg"];
$password = $_POST["passwordReg"];
$rol = $_POST["rol"];
$email = $_POST["emailReg"];
$nacimiento = $_POST["nacimientoReg"];
$pais = $_POST["paisReg"];
$ciudad = $_POST["poblacionReg"];

$sql = "INSERT INTO usuario 
    (username, contrasena, rol, email, fechaNacimiento, idCiudad)
    VALUES 
    ('$username', '$password', '$rol', '$email', '$nacimiento', '$idCiudad')";

if ($conn->query($sql) === true) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
