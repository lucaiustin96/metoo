<?php
	date_default_timezone_set('Europe/Bucharest');
	// Connect to a database
	$conn = mysqli_connect('localhost', 'root', '', 'metoo');

	echo 'Processing...';

	if(isset($_POST['name'])){
	  $name = mysqli_real_escape_string($conn, $_POST['name']);
	}

	if(isset($_POST['userId'])){
	  $userId = mysqli_real_escape_string($conn, $_POST['userId']);  
	}

	if(isset($_POST['location'])){
	  $location = mysqli_real_escape_string($conn, $_POST['location']);
	}

	if(isset($_POST['postContent'])){
	  $postContent = mysqli_real_escape_string($conn, $_POST['postContent']);  
	}
	
	$deit = date('Y-m-d H:i:s');
	
	$query = "INSERT INTO posts(name, userId, message, location, date) VALUES('$name', '$userId', '$postContent', '$location', '$deit')";

	if(mysqli_query($conn, $query)){
		echo 'Datele au fost inserate...';
	} else {
		echo 'ERROR: '. mysqli_error($conn);
	}
?>