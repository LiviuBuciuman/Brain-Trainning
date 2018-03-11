<?php
require_once "dbConfig.php";

$sql = "SELECT Name FROM country ORDER BY Name ASC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $row["Name"];
    }
} else {
    echo "0 results";
}
$conn->close();

?>