if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../service.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}

//////////////////////////////////////////////
///Functii pentru cookies
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
    loadLocations();
    loadPostInfo();
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
