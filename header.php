<header class= "header-wrapper">
	<div class= "header">
		<div class = "menu-icon" onclick="displayMenu()">
			<span class="icon-menu"></span>
		</div>
		<div class= "logo">Metoo</div>
		<nav id = "nav">
			<ul>
				<li><a href= "index.php">Home</a></li>
				<li><a href= "location.php">Your Location</a></li>
				<li><a href= "edit-profile.php">Edit profile</a></li>
				<li><a href= "top-locations.php">Top Locations</a></li>
				<li class = "login-parrent"><a class = "login-button" onclick="displayLogin()">Login</a>
					<div id = "login-form">
						<form action="/action_page.php">
							<input type="text" name="firstname" value="First Name">
							<input type="text" name="lastname" value="Last Name">
							<input type="submit" value="Login">
						</form> 
					</div> 
				</li>
			</ul>
		</nav>
	</div>	
</header>