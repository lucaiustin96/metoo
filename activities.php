<!DOCTYPE html>
<html lang="en">
	<head>
		<title>
			Metoo | Activities
		</title>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet"  type="text/css" href="fonts/style.css">
		<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
		
	</head>
	<body>
		<?php include("header.php"); ?>
		<?php 
							if(isset($_COOKIE['userId']) && $_COOKIE['userId'] != -1)
								include("content/content-activities.php");
							else
								include("content/content-login.php");
							?>
		<?php include("footer.php"); ?>
	</body>
</html>