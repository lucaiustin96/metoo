<?php 
// Create Connection
$conn = mysqli_connect('localhost', 'root', '', 'metoo');

$query = 'SELECT * FROM locations';

// Get Result
$result = mysqli_query($conn, $query);

// Fetch Data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);

?>