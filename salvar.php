<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "tcc";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = 'insert into jogo (size, xml, nome) values (' . $_POST["tamanho"] . ',"' . $_POST["xml"] . '","' . $_POST["nome"] . '")';

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>