
<div class = "article-wrapper">
	<div class="notifications-list"></div>
	<div class="dummy-notification" style="display:none;">
		<div class="notification-close" onclick="closeNotification()">X</div>
		<span>John Smith posted something that might interest you.</span>
	</div>
	<div id = "chat-area">
	</div>
	<section>
		<h3 class="text-center mrg-none pad-top-20">Your activities</h3>
		<div class= "section-content">
			<div class ="flex-container">

				<div class = "left">
					<div class = "flex-container-card">
						<div class = "add-post">
							<div class = "add-post-text" onclick="postWindow()"> Add your intention </div>
							<div id = "add-post-window" style="display: none;">
								<div class = "add-post-cancel"  onclick="postWindow()">X</div>
								<form id = "postForm">
									<div id = "locations-list">
									</div>
									<div id = "username"></div>
									 <textarea name="postContent" id="postContent" placeholder="Add some text..."></textarea>
									 <input type="submit" value="Submit" >
								</form>
							</div>
						</div>

						<div class = "add-place">
							<div class = "add-place-text" onclick = "addPlace()"> Add new place </div>
							<div id = "add-place-window">
								<div class = "add-place-window-cancel" onclick = "addPlace()">X</div>
								  <form id="locationForm">
								    <input type="text" name="location" id="location" placeholder="Locatia">
									<input type="text" name="address" id="address" placeholder="Adresa">
								    <input type="submit" value="Submit">
								  </form>
							</div>
						</div>
					</div>
				</div>
				<div id = "right">
					<div id = "refresh-posts" onclick="loadPosts()">Refresh posts</div>
					<div id = "posts">
						Nu exista postari
					</div>
				</div>
			</div>
		</div>
	</section>
</div>