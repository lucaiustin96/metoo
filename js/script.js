function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
   // alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

//////////////////////////////////////////////
var userId = -1;
var chatWindows = [];

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
           setCookie("userId", userId, 1);
          initChat();
           document.getElementById("userId").innerHTML = userId;
           setElements(true);
         } else {
           userId = -1;
           setCookie("userId", userId, 1);
          // document.getElementById("userId").innerHTML = userId;
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadPosts(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'posts.php', true);

      xhr.onload = function(){
        if(this.status == 200){
          var users = JSON.parse(this.responseText);
          
          var output = '';
          
          for(var i in users){
            output += 
            '<div class = "post">' +
                '<div class = "post-info">' +
                users[i].name +  ' / '+users[i].date+ ' / ' + users[i].userId + 
                '<input type="hidden" id="userId'+users[i].userId+'"'+ 
                'value="'+users[i].userId+'"></div>'+
                 //users[i].message +
    
                '<div class = "message-icon" id = "chat-icon-1" onclick="displaychat('+users[i].userId+')">'+
                    '<span class="icon-bubbles4"></span>'+
                '</div>'+
                '<div class = "chat-wrapper" id = "chat-window-'+users[i].userId+'">'+
                    '<div class = "chat-msg"  id = "chat'+users[i].userId+'">'+
                        '<h3><div id = "userId"></div></h3>'+
                        '<div class = "msg-log" id="log'+users[i].userId+'"></div>'+
                       // '<label>Message for: <input id="user2Id" type="text"/></label>'+
                        '<label><input class = "msg-text" id="msg'+users[i].userId+'" type="text" onkeypress="onkey(event)"/></label>'+
                        '<button class = "send-msg" onclick="send('+users[i].userId+')">Send</button>'+
                        '<div class = "chat-close" onclick="quitDinamic('+users[i].userId+')">X</div></div>'+
                    '</div>'+

                '</div>' +
            '</div>';
          }
          document.getElementById('right').innerHTML = output;

          var chat = document.getElementById("chat-window-"+users[i].userId);
          chat.style.display = "none";
        }
      }
      xhr.send();
    }
    loadPosts();
//setInterval(loadPosts, 10000 );
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var socket;
function createSocket(host) {
    if ('WebSocket' in window)
        return new WebSocket(host);
    else if ('MozWebSocket' in window)
        return new MozWebSocket(host);
    throw new Error("No web socket support in browser!");
}
function initChat() {
    var host = "ws://localhost:12345/chat";
    try {
        socket = createSocket(host);
        console.log('WebSocket - status ' + socket.readyState);
        socket.onopen = function(msg) {
          // log("Welcome - status " + this.readyState);
            socket.send(userId);
        };
        socket.onmessage = function(msg) {
            //alert("Msg primit este: " + msg.data);
            var res = msg.data.split(" ");
            if(!msg.data.startsWith("First"))
            {
                if (msg.data.includes("said: log"))
                {
                    logDinamic(msg.data, res[0]);
                }
                else{
                  //  alert(chatWindows);
                   // if(typeof chatWindows[res[0]] === 'undefined') {
                    if(!chatWindows.includes(res[0])) {
                        chatWindows.push(res[0]);
                        document.getElementById("chat-area").innerHTML += '<div class = "chat-msg" id = "chat'+res[0]+'" ><h3><div id = "userId"></div></h3><div class = "msg-log" id="'+res[0]+'"></div><label><input class = "msg-text" id="msg'+res[0]+'" type="text"/></label><button class = "send-msg" onclick="sendDinamic('+res[0]+')">Send</button><div class = "chat-close" onclick="quitDinamic('+res[0]+')">X</div></div>';
                        document.getElementById(res[0]).innerHTML = "First<br>" + msg.data;
                    }
                    else{

                        document.getElementById(res[0]).innerHTML += "Secound<br><br><br>" + msg.data + "<br><br><br>"; 
                    }
                }
            }
        };
        socket.onclose = function(msg) {
            console.log("Disconnected - status " + this.readyState);
        };
    }
    catch (ex) {
        console.log(ex);
    }
   // document.getElementById("msg").focus();
}

function sendDinamic(id) {

    var msg = document.getElementById('msg'+id).value;
    //var user2Id = document.getElementById('user2Id'+id).value;
    try {
        var res = "log " + id + " " + msg;
        document.getElementById(id).innerHTML += "Tu: " + msg;
        socket.send(res);
        //alert("Msg trimis este" + res);
    } catch (ex) {
        console.log(ex);
    }
}

function send(user2Id) {

    var msg = document.getElementById('msg'+user2Id).value;
    //var user2Id = document.getElementById('user2Id').value;
    try {
        var res = user2Id + " " + msg;
        logDinamic("Tu: " + msg, user2Id);
        socket.send(res);
    } catch (ex) {
        console.log(ex);
    }
}

function quit() {
    console.log("Goodbye!");
    socket.close();
    socket = null;
}

function quitDinamic(id) {
    var quit = document.getElementById("chat"+id);
    quit.style.display = "none";
    socket.close();
    socket = null;
}

function logDinamic(msg, id) {
    document.getElementById("log"+id).innerHTML += "<br>" + msg;
}

function log(msg) {
    ;//document.getElementById("log").innerHTML += "<br>" + msg;
}

function onkey(event) {
    if (event.keyCode == 13) {
       ;// send();
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function displaychat(id) {
    var chat = document.getElementById("chat-window-"+id);
    if (chat.style.display === "none") {
        chat.style.display = "block";
    } else {
        chat.style.display = "none";
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
