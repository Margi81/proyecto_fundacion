<?php
include("db.php"); // Incluye el archivo de conexión a la base de datos

function registrarDonacion($nombre, $correo, $cantidad, $mensaje, $metodo_pago, $informacion_adicional) {
    global $conn;

    // Obtener la fecha actual
    $fecha_donacion = date("Y-m-d");

    // Preparar la consulta SQL
    $sql = "INSERT INTO Donaciones (nombre_donante, correo_donante, cantidad, fecha_donacion, mensaje_agradecimiento, metodo_pago, informacion_adicional) 
            VALUES ('$nombre', '$correo', $cantidad, '$fecha_donacion', '$mensaje', '$metodo_pago', '$informacion_adicional')";

    // Ejecutar la consulta
    if ($conn->query($sql) === TRUE) {
        echo "Donación registrada exitosamente";
    } else {
        echo "Error al registrar la donación: " . $conn->error;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $cantidad = $_POST["cantidad"];
    $mensaje = $_POST["mensaje"];

    // Método de pago e información adicional son opcionales y pueden ser nulos
    $metodo_pago = isset($_POST["metodo_pago"]) ? $_POST["metodo_pago"] : null;
    $informacion_adicional = isset($_POST["informacion_adicional"]) ? $_POST["informacion_adicional"] : null;

    registrarDonacion($nombre, $correo, $cantidad, $mensaje, $metodo_pago, $informacion_adicional);
}

$conn->close(); // Cerrar la conexión a la base de datos
?>
