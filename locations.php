<?php

// Connect to a database
$conn = mysqli_connect('localhost', 'root', '', 'metoo');

echo 'Processing...';

// Check for POST variable
if(isset($_POST['location'])){
  $location = mysqli_real_escape_string($conn, $_POST['location']);
}

if(isset($_POST['userId'])){
  $userId = mysqli_real_escape_string($conn, $_POST['userId']);  
  //echo 'POST: Your name is '. $_POST['name'];
}

if(isset($_POST['address'])){
  $address = mysqli_real_escape_string($conn, $_POST['address']);
}
  $query = "INSERT INTO locations(location, user, address) VALUES('$location', '$userId', '$address')";

if(mysqli_query($conn, $query)){
echo 'Datele au fost inserate...';
} else {
echo 'ERROR: '. mysqli_error($conn);
}
?>