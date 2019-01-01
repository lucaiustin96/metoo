var userId = -1;
var last_name;
var first_name;
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
           FB.api('/me', {fields: 'last_name'}, function(response) {
            last_name = response.last_name;
          });
           FB.api('/me', {fields: 'first_name'}, function(response) {
            first_name = response.first_name;
          });
          //initChat();
           //document.getElementById("userId").innerHTML = userId;
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
