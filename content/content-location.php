<article class = "article-wrapper">
	<section class= "section-content">
		<div class ="flex-container">

			<div class = "chat-icon" onclick="displayMessage()"><span class="icon-bubbles2"></span></div>
			<div id = "chat-message">
				<div class = "chat-close" onclick="displayMessage()">X</div>
				<form action="/action_page.php">
				    <textarea ></textarea>
				    <input type="submit" value="Send">
				 </form>
			</div>

			<div class = "left">
				<form action="/action_page.php">
					<label for="country">Your location</label>
					<select id="country" name="country">
						<option value="australia">BCU Iasi</option>
						<option value="canada">Parcul Copou</option>
						<option value="usa">Palas</option>
					</select>

					<label for="country">Your abilities</label>
					<select id="country" name="country">
						<option value="australia">PHP</option>
						<option value="canada">Design</option>
						<option value="usa">Javascript</option>
					</select>

					<input type="submit" value="Submit">
				</form>
				<div class = "flex-container-card">
					<div class = "add-post">
						<div class = "add-post-text" onclick="PostWindow()"> Add your intention </div>
						<div id = "add-post-window">
							<div class = "add-post-cancel"  onclick="PostWindow()">X</div>
							<form action="/action_page.php">
							    <textarea ></textarea>
							    <input type="submit" value="Send">
							 </form>
						</div>
					</div>

					<div class = "searce-place">
						<div class = "searce-place-text"> Search place</div>
					</div>
				</div>
			</div>

			<div class = "right">
				<div class = "post">
					Lorem ipsum dolor sit amet, sit id quaestio persecuti contentiones. Usu ei discere instructior, mel simul ridens te, quidam labitur vim et. Omnis electram posidonium sit no, graece labitur saperet mea ut, justo sententiae id sea. Vel diam ridens electram ei.
					<div class = "post-chat-icon" onclick="SendMessageWindow()"><span class="icon-bubbles4"></span></div>
				</div>

				<div class = "post">
					Lorem ipsum dolor sit amet, sit id quaestio persecuti contentiones. Usu ei discere instructior, mel simul ridens te, quidam labitur vim et. Omnis electram posidonium sit no, graece labitur saperet mea ut, justo sententiae id sea. Vel diam ridens electram ei.
					<div class = "post-chat-icon" onclick="SendMessageWindow()"><span class="icon-bubbles4"></span></div>
				</div>

				<div class = "post">
					Lorem ipsum dolor sit amet, sit id quaestio persecuti contentiones. Usu ei discere instructior, mel simul ridens te, quidam labitur vim et. Omnis electram posidonium sit no, graece labitur saperet mea ut, justo sententiae id sea. Vel diam ridens electram ei.
					<div class = "post-chat-icon" onclick="SendMessageWindow()"><span class="icon-bubbles4"></span></div>
				</div>

				<div class = "post">
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