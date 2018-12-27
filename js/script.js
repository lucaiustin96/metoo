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