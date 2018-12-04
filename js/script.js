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