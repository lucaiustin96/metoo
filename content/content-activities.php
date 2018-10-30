<article class = "article-wrapper">
	<div id = "notification">
		<div class = "notification-close" onclick="CloseNotification()">X</div>
		John Smith posted something that might interest you.
	</div>
	<section class= "section-content">
		<div class ="flex-container">
			<div id = "chat-message">
				<div class = "chat-close" onclick="displayMessage()">X</div>
				<form action="/action_page.php">
				    <textarea ></textarea>
				    <input type="submit" value="Send">
				 </form>
			</div>
			<div class="chat-icon" onclick="displayMessage()"><span class="icon-bubbles2"></span></div>

			<div class = "left">
				<form action="/action_page.php">
					<label for="country">Your location</label>
					<select id="country" name="country">
						<option value="australia">BCU Iasi</option>
						<option value="canada">Parcul Copou</option>
						<option value="usa">Palas</option>
					</select>
				</form>
				<div class = "flex-container-card">
					<div class = "add-post">
						<div class = "add-post-text" onclick="PostWindow()"> Add your intention </div>
						<div id = "add-post-window">
							<div class = "add-post-cancel"  onclick="PostWindow()">X</div>
							<form action="/action_page.php">
							    <textarea></textarea>
							    <input type="submit" value="Send">
							 </form>
						</div>
					</div>

					<div class = "add-place">
						<div class = "add-place-text" onclick = "AddPlace()"> Add new place </div>
						<div id = "add-place-window">
							<div class = "add-place-window-cancel" onclick = "AddPlace()">X</div>
							<form action="/action_page.php">
								<input type="text" name="newLocation" placeholder="New location">
								<input type="submit" value="Add Place">
							</form> 
						</div>
					</div>
				</div>
			</div>

			<div class = "right">
				<div class = "post">
					<div class = "post-info">Jhon Smith / 29-10-2018</div>
					Lorem ipsum dolor sit amet, sit id quaestio persecuti contentiones. Usu ei discere instructior, mel simul ridens te, quidam labitur vim et. Omnis electram posidonium sit no, graece labitur saperet mea ut, justo sententiae id sea. Vel diam ridens electram ei.
					<div class = "post-chat-icon" onclick="SendMessageWindow()"><span class="icon-bubbles4"></span></div>
				</div>

				<div class = "post">
					<div class = "post-info">Jhon Smith / 29-10-2018</div>
					Lorem ipsum dolor sit amet, sit id quaestio persecuti contentiones. Usu ei discere instructior, mel simul ridens te, quidam labitur vim et. Omnis electram posidonium sit no, graece labitur saperet mea ut, justo sententiae id sea. Vel diam ridens electram ei.
					<div class = "post-chat-icon" onclick="SendMessageWindow()"><span class="icon-bubbles4"></span></div>
				</div>

				<div class = "post">
					<div class = "post-info">Jhon Smith / 29-10-2018</div>
					Lorem ipsum dolor sit amet, sit id quaestio persecuti contentiones. Usu ei discere instructior, mel simul ridens te, quidam labitur vim et. Omnis electram posidonium sit no, graece labitur saperet mea ut, justo sententiae id sea. Vel diam ridens electram ei.
					<div class = "post-chat-icon" onclick="SendMessageWindow()"><span class="icon-bubbles4"></span></div>
				</div>

				<div class = "post">
					<div class = "post-info">Jhon Smith / 29-10-2018</div>
					Lorem ipsum dolor sit amet, sit id quaestio persecuti contentiones. Usu ei discere instructior, mel simul ridens te, quidam labitur vim et. Omnis electram posidonium sit no, graece labitur saperet mea ut, justo sententiae id sea. Vel diam ridens electram ei.
					<div class = "post-chat-icon" onclick="SendMessageWindow()"><span class="icon-bubbles4"></span></div>
				</div>

				<div id = "send-message">
					<div class = "chat-close" onclick="SendMessageWindow()">X</div>
					<form action="/action_page.php">
					    <textarea ></textarea>
					    <input type="submit" value="Send">
					 </form>
				</div>
			</div>
		</div>
	</section>
</article>