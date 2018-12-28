var userId = -1;
window.fbAsyncInit = function() {
        FB.init({
          appId      : '3061256547233602',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.8'
        });
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
      };
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
       function statusChangeCallback(response){
         if(response.status === 'connected'){
            userId = response.authResponse.userID;
            alert(userId);
           setElements(true);
         } else {
           userId = -1;
           alert(userId);
           setElements(false);
         }
       }
      function checkLoginState() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      }
      function setElements(isLoggedIn){
        if(isLoggedIn){
          document.getElementById('facebook-login').style.display = 'none';
          document.getElementById('facebook-logout').style.display = 'inline';
        } else {
          document.getElementById('facebook-login').style.display = 'inline-block';
          document.getElementById('facebook-logout').style.display = 'none';
        }
      }
      function logout(){
        FB.logout(function(response){
          userId = -1;
          setElements(false);
        });
      }


























var socket;
function createSocket(host) {
    if ('WebSocket' in window)
        return new WebSocket(host);
    else if ('MozWebSocket' in window)
        return new MozWebSocket(host);
    throw new Error("No web socket support in browser!");
}
function init() {
    var host = "ws://localhost:12345/chat";
    try {
        socket = createSocket(host);
        log('WebSocket - status ' + socket.readyState);
        socket.onopen = function(msg) {
            log("Welcome - status " + this.readyState);
            socket.send("test122334");
        };
        socket.onmessage = function(msg) {
            log(msg.data);
        };
        socket.onclose = function(msg) {
            log("Disconnected - status " + this.readyState);
        };
    }
    catch (ex) {
        log(ex);
    }
    document.getElementById("msg").focus();
}

function send() {
    var msg = document.getElementById('msg').value;
    try {
        socket.send(msg);
    } catch (ex) {
        log(ex);
    }
}
function quit() {
    log("Goodbye!");
    socket.close();
    socket = null;
}
function log(msg) {
    document.getElementById("log").innerHTML += "<br>" + msg;
}
function onkey(event) {
    if (event.keyCode == 13) {
        send();
    }
}

function displayMenu() {
    var nav = document.getElementById("nav");
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

function displayLogin() {
    var loginForm = document.getElementById("login-form");
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
}

function displayMessage() {
    var chat = document.getElementById("chat-message");
    if (chat.style.display === "none") {
        chat.style.display = "block";
    } else {
        chat.style.display = "none";
    }
}

function postWindow() {
    var postWindow = document.getElementById("add-post-window");
    if (postWindow.style.display === "none") {
        postWindow.style.display = "block";
    } else {
        postWindow.style.display = "none";
    }
}

function sendMessageWindow() {
    var messageWindow = document.getElementById("send-message");
    if (messageWindow.style.display === "none") {
        messageWindow.style.display = "block";
    } else {
        messageWindow.style.display = "none";
    }
}

function closeNotification() {
    var notification = document.getElementById("notification");
    if (notification.style.display === "none") {
        notification.style.display = "block";
    } else {
        notification.style.display = "none";
    }
}

function addPlace() {
    var placeWindow = document.getElementById("add-place-window");
    if (placeWindow.style.display === "none") {
        placeWindow.style.display = "block";
    } else {
        placeWindow.style.display = "none";
    }
}