<header>
	<div class= "header-wrapper">
		<div class= "header">
			<div class = "menu-icon" onclick="displayMenu()">
				<span class="icon-menu"></span>
			</div>
			<div class = "chat-icon-mobile" onclick="displayMessage()"><span class="icon-bubbles2"></span></div>
			<div class= "logo">Metoo</div>
			<nav>
				<div id = "nav">
					<ul>
						<li><a href= "index.php">Home</a></li>
						<li><a href= "activities.php">Your activities</a></li>
						<li><a href= "edit-profile.php">Edit profile</a></li>
						<li><a href= "top-locations.php">Top Locations</a></li>
						<li><a href= "raport.html">Raport</a></li>				
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
				</div>
			</nav>
		</div>	
	</div>
</header>