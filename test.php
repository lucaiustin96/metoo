<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Ajax 5- Fetch from PHP MySQL</title>
</head>
<body>
  <button id="button">Get Users</button>
  <br><br>
  <h1>Users</h1>  
  <div id="users"></div>

  <script>
    function loadUsers(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'posts.php', true);

      xhr.onload = function(){
        if(this.status == 200){
          var users = JSON.parse(this.responseText);
          
          var output = '';
          
          for(var i in users){
            output += '<ul>' +
              '<li>ID: '+users[i].id+'</li>' +
              '<li>Name: '+users[i].name+'</li>' +
              '<li>Message: '+users[i].message+'</li>' +
              '<li>UserId: '+users[i].userId+'</li>' +
              '<li>Date: '+users[i].date+'</li>' +
              '<li>Location: '+users[i].location+'</li>' +
              '</ul>';
          }

          document.getElementById('users').innerHTML = output;
        }
      }
      xhr.send();
    }
    setInterval( loadUsers, 50 ); 
  </script>
</body>
</html>