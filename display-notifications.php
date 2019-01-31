<?php 
// Create Connection
$conn = mysqli_connect('localhost', 'root', '', 'metoo');

if(isset($_GET['userId'])){
    $userId = mysqli_real_escape_string($conn, $_GET['userId']);  
}

$query = "SELECT p.name, p.message, p.userId FROM users u1 JOIN posts p ON u1.userId = p.userId WHERE abilities IN (SELECT abilities FROM users u2 WHERE u2.userId = '".$userId."' AND u1.userId <> u2.userId) AND TIME_TO_SEC(TIMEDIFF(NOW(), p.date)) < 10";

// Get Result
$result = mysqli_query($conn, $query);

// Fetch Data
$notif = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($notif);

?>