//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functia care incarca postarile din baza de date
function loadPosts(){
      //pornim chat-ul
      initChat();

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'posts.php', true);

      xhr.onload = function(){
        if(this.status == 200){
          var posts = JSON.parse(this.responseText);
          
          var output = '';
          
          for(var i in posts){
            if(userId == posts[i].userId)
            {
                 output += 
                 '<div class = "post">' +
                    '<div class = "delete-post" onclick = "deletePost('+posts[i].id+')">Delete</div>'
                 
            }else{
                 output += 
                '<div class = "post">';
            }
            output += 
            //'<div class = "post">' +
                '<div class = "post-info">' +
                posts[i].name +  ' / '+posts[i].date+ ' / ' + posts[i].userId + 
                '<input type="hidden" id="userId'+posts[i].userId+'"'+ 
                'value="'+posts[i].userId+'"></div>'+
                '<div class = "post-text">' + posts[i].message + '</div>' +

                '<div class = "message-icon"  onclick="displaychat('+posts[i].userId+')">'+
                  '<span class="icon-bubbles4"></span>'+
                '</div>' +

                '<div class = "chat-wrapper" id = "chat-window-'+posts[i].userId+'">'+
                    '<div class = "chat-msg"  id = "chat'+posts[i].userId+'">'+
                      //  '<h3><div id = "userId"></div></h3>'+
                        '<div class = "msg-log" id="log'+posts[i].userId+'"></div>'+
                        '<label><input class = "msg-text" id="msg'+posts[i].userId+'" type="text" onkeypress="onkey(event)"></label>'+
                        //'<button class = "send-msg" onclick="send('+posts[i].userId+')">Send</button>'+
                        '<input type="submit" class = "send-msg" value="Submit" onclick="send('+posts[i].userId+')">' +
                    '</div>'+
                '</div>' +
            '</div>';

          }
          if (document.querySelector('#locationForm') !== null) {
            document.getElementById('posts').innerHTML = output;
          }
          var chat = document.getElementById("chat-window-"+posts[i].userId);
          if (document.querySelector('#chat-window-'+posts[i].userId) !== null) {
            chat.style.display = "none";
          }
        }
      }
      xhr.send();
    }
    loadPosts();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Fuctia care adauga locatii in baza de
if (document.querySelector('#locationForm') !== null) {
  document.getElementById('locationForm').addEventListener('submit', postName);
}
function postName(e){
    e.preventDefault();

    var location = document.getElementById('location').value;
    
    var params = "location="+location+"&"+"userId="+userId;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'locations.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.send(params);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadLocations(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'display-locations.php', true);

  xhr.onload = function(){
    if(this.status == 200){
      var locations = JSON.parse(this.responseText);
      
      var output = '<select id="locations" name="locations">';
        for(var i in locations){
          output += '<option value="'+ locations[i].id+'">'+locations[i].location+'</option>';
        }
      output += '</select>';
      document.getElementById('locations-list').innerHTML = output;
    }
  }
  xhr.send();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Fuctia care adauga locatii in baza de
if (document.querySelector('#postForm') !== null) {
  document.getElementById('postForm').addEventListener('submit', addNewPost);
}
function addNewPost(e){
    e.preventDefault();  
    var name = document.getElementById('usernameHidden').value;
   
    var e = document.getElementById("locations");
    var strLocation = e.options[e.selectedIndex].text;
    var postContent =  document.getElementById("postContent").value;
    var params = "name="+name+"&userId="+userId+"&location="+strLocation+"&postContent="+postContent;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'add-posts.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.send(params);
}

function loadPostInfo(){
  username = first_name + " " +  last_name;
  document.getElementById('username').innerHTML = '<input type="hidden" id="usernameHidden" name="usernameHidden" value="' + username + '">';
  //document.getElementById('userId').innerHTML = '<input type="hidden" id="userId" name="userId" value="'+ userId +'">';
}

function deletePost(e){
  alert(e);
    var params = "id="+e;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'delete-post.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function(){
        console.log(this.responseText);
    }

    xhr.send(params);
}