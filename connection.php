<?php
$serverName = "localhost";
$userName = "root";
$password = "";
$database = "weatherapp";

$conn = mysqli_connect($serverName, $userName, $password);
if (!$conn) exit;

mysqli_query($conn, "CREATE DATABASE IF NOT EXISTS $database");
mysqli_select_db($conn, $database);

$createTable = "CREATE TABLE IF NOT EXISTS weather (
    id INT  PRIMARY KEY,
    city VARCHAR(100),
    humidity FLOAT NOT NULL,
    wind FLOAT NOT NULL,
    pressure FLOAT NOT NULL,
    temperature FLOAT NOT NULL,
    wind_direction INT NOT NULL,
    icon VARCHAR(10),
    description VARCHAR(100),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

mysqli_query($conn, $createTable);

$cityName = isset($_GET['q']) ? $_GET['q'] : "Khalanga";

$selectQuery = "SELECT * FROM weather WHERE city = '$cityName' AND last_updated >= NOW() - INTERVAL 2 HOUR";
$result = mysqli_query($conn, $selectQuery);

if (mysqli_num_rows($result) == 0) {
    $apiKey = "2f784d9bff56f9b8cd741b329a162245";
    $url = "https://api.openweathermap.org/data/2.5/weather?q=$cityName&appid=$apiKey&units=metric";
    $response = file_get_contents($url);
    $data = json_decode($response, true);

    if (!isset($data['main'])) {
        http_response_code(404);
        echo json_encode(["error" => "City not found or API error"]);
        exit;
    }

    $humidity = $data['main']['humidity'];
    $wind = $data['wind']['speed'];
    $pressure = $data['main']['pressure'];
    $temperature = $data['main']['temp'];
    $wind_direction = $data['wind']['deg'];
    $icon = $data['weather'][0]['icon'];
    $description = $data['weather'][0]['description'];

    $insert = "INSERT INTO weather (city, humidity, wind, pressure, temperature, wind_direction, icon, description)
               VALUES ('$cityName', '$humidity', '$wind', '$pressure', '$temperature', '$wind_direction', '$icon', '$description')";
    mysqli_query($conn, $insert);

    $result = mysqli_query($conn, "SELECT * FROM weather WHERE city = '$cityName' ORDER BY last_updated DESC LIMIT 1");
}

$rows = [];
while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}
header('Content-Type: application/json');
echo json_encode($rows);
?>
