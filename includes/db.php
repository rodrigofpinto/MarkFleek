<?php
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "meu_banco";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>