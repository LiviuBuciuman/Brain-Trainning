<?php

$nombre = $_GET["nombre"];
$pass = $_GET["pass"];
$email = $_GET["email"];
$nacimiento = $_GET["nacimiento"];
$ciudad = $_GET["ciudad"];
$rol = "Usuario";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "braintrainning";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO usuario (username, password, rol, email, fechaNacimiento, idCiudad)
                VALUES ('$nombre', '$pass', '$rol', '$email', '$nacimiento', '$ciudad')";

//if (mysqli_query($conn, $sql)) {
//    echo "New record created successfully";
//} else {
//    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
//}

mysqli_close($conn);
