var chatWindows = [];
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
            var res = msg.data.split(" ");
            if(!msg.data.startsWith("First"))
            {
                if (msg.data.includes("said: log")) 
                {
                    logDinamic(msg.data, res[0]);
                }
                else{
                    if(!chatWindows.includes(res[0])) {
                        chatWindows.push(res[0]);
                        document.getElementById("chat-area").innerHTML += '<div class = "chat-msg-bottom" id = "chat'+res[0]+
                        '" ><h3><div id = "userId"></div></h3><div class = "msg-log" id="'+res[0]+
                        '"></div><label><input class = "msg-text" id="msg'+res[0]+
                        '" type="text"/></label><button class = "send-msg" onclick="sendDinamic('+res[0]+
                        ')">Send</button><div class = "chat-close" onclick="quitDinamic('+res[0]+')">X</div></div>';
                        document.getElementById(res[0]).innerHTML = "<br>" + msg.data;
                    }
                    else{

                        document.getElementById(res[0]).innerHTML += "<br>" + msg.data; 
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
        document.getElementById(id).innerHTML += "<br>Tu: " + msg;
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
        logDinamic("<br>Tu: " + msg, user2Id);
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
    //socket.close();
    //socket = null;
}

function logDinamic(msg, id) {
    msg = msg.replace("said: log", "said: ");
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
