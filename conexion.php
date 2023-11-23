<?php

//Db local
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "fundacion";

   

$conn = mysqli_connect($hostname, $username, $password, $dbname);
if (!$conn) {
  echo "Error al conectar la base de datos.. " . mysqli_connect_error();
}else{ }