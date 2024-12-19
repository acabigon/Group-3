<?php

$servername = "localhost"; 
$username = "root";        
$password = "";            
$dbname = "portfolio";     

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);

    $sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Message sent successfully!";

        $file = 'contact.txt';
        $currentData = "Name: $name\nEmail: $email\nMessage: $message\n---\n";
        
        if (file_put_contents($file, $currentData, FILE_APPEND) !== false) {
            echo " Message also saved to contact.txt.";
        } else {
            echo " Failed to save message to contact.txt.";
        }
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
