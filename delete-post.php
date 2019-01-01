<?php
	// Connect to a database
	$conn = mysqli_connect('localhost', 'root', '', 'metoo');

	echo 'Processing...';

	if(isset($_POST['id'])){
	  $id = mysqli_real_escape_string($conn, $_POST['id']);
	}

	
	$query = "DELETE FROM posts WHERE id = '$id'";
	if(mysqli_query($conn, $query)){
		echo 'Datele au fost sterse...';
	} else {
		echo 'ERROR: '. mysqli_error($conn);
	}
?>