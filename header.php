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
					<ul id = "nav-ul">
						<li><a href= "index.php">Home</a></li>
						<?php 
							if(isset($_COOKIE['userId']) && $_COOKIE['userId'] != -1){
								echo '<li><a href= "activities.php">Your activities</a></li>
								<li><a href= "edit-profile.php">Edit profile</a></li>';
							}
						?>
						<li><a href= "top-locations.php">Top Locations</a></li>
						<li><a href= "raport.html">Raport</a></li>				
						<li><a href = "#" id = "facebook-logout" onclick="logout()">Logout</a></li>
						<li>
							<fb:login-button id = "facebook-login" scope="public_profile,email" onlogin="checkLoginState();">
							</fb:login-button>
						</li> 
					</ul>
				</div>
			</nav>
		</div>	
	</div>
</header>
