<?php
header('Content-Type: application/json');

// Step 1: Connect to MySQL (without specifying database yet)
$conn = mysqli_connect("localhost", "root", "");
if (!$conn) {
    echo json_encode(["error" => "Database connection failed: " . mysqli_connect_error()]);
    exit;
}

// Step 2: Create the 'movie' database if it doesn't exist
$createDatabase = "CREATE DATABASE IF NOT EXISTS movie";
if (!mysqli_query($conn, $createDatabase)) {
    echo json_encode(["error" => " Failed to create database: " . mysqli_error($conn)]);
    exit;
}

// Step 3: Select the 'movie' database
mysqli_select_db($conn, "movie");

// Step 4: Create the 'data' table if it doesn't exist
$createTable = "CREATE TABLE IF NOT EXISTS data (
    title VARCHAR(255),
    poster TEXT,
    rating VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)";
mysqli_query($conn, $createTable);

// Step 5: Handle movie query
$movieName = isset($_GET['movieName']) ? mysqli_real_escape_string($conn, $_GET['movieName']) : 'Avatar';

// Step 6: Check if movie exists in DB
$selectData = "SELECT * FROM data WHERE title = '$movieName'";
$result = mysqli_query($conn, $selectData);

if (mysqli_num_rows($result) == 0) {
    // Not in DB: Fetch from API
    $apiKey = "84a38e48";
    $apiResponse = file_get_contents("https://www.omdbapi.com/?apikey=$apiKey&t=" . urlencode($movieName));
    $data = json_decode($apiResponse, true);

    if ($data && $data["Response"] === "True") {
        $title = mysqli_real_escape_string($conn, $data['Title']);
        $poster = mysqli_real_escape_string($conn, $data['Poster']);
        $rating = mysqli_real_escape_string($conn, $data['imdbRating']);

        $insert = "INSERT INTO data (title, poster, rating) VALUES ('$title', '$poster', '$rating')";
        mysqli_query($conn, $insert);

        echo json_encode($data);
        exit;
    } else {
        echo json_encode(["Response" => "False", "Error" => "Movie not found"]);
        exit;
    }
} else {
    // Found in DB: return cached data
    $row = mysqli_fetch_assoc($result);
    echo json_encode([
        "Response" => "True",
        "Title" => $row['title'],
        "Poster" => $row['poster'],
        "imdbRating" => $row['rating'],

    ]);
    exit;
}
?>
