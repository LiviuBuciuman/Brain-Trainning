<?php
require_once "dbConfig.php";

$sql = "SELECT * FROM country";
$result = $conn->query($sql);

$array = [];

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $array[] = $row;
    }
} else {
    echo "0 results";
}

echo json_encode($array, JSON_UNESCAPED_UNICODE);

$conn->close();

?>