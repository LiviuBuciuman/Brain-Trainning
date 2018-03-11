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
    (username, pass, rol, email, fechaNacimiento, pais, ciudad)
    VALUES 
    ('$username', '$password', '$rol', '$email', '$nacimiento', '$pais', '$ciudad')";

if ($conn->query($sql) === true) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
