<?php
// Connect to a database
$conn = mysqli_connect('localhost', 'root', '', 'metoo');

echo 'Processing...';

if(isset($_POST['userId'])) {
    $userId = mysqli_real_escape_string($conn, $_POST['userId']);  
}

if(isset($_POST['abilities'])){
    $abilities = mysqli_real_escape_string($conn, $_POST['abilities']);  
}

$query = "INSERT INTO users(userID, abilities) VALUES('$userId', '$abilities')";

if(mysqli_query($conn, $query)){
    echo 'Datele au fost inserate...';
} else {
    echo 'ERROR: '. mysqli_error($conn);
}

?>