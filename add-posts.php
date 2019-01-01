<?php
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
	$data = date("Y/m/d");
	$query = "INSERT INTO posts(name, userId, message, location, date) VALUES('$name', '$userId', '$postContent', '$location', '$data')";

	if(mysqli_query($conn, $query)){
		echo 'Datele au fost inserate...';
	} else {
		echo 'ERROR: '. mysqli_error($conn);
	}
?>