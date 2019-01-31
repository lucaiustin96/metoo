function displayNotifications() {
    let http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            const notificationsList = JSON.parse(http.responseText);
            populateNotificationsContainer(notificationsList);

        }
    }
    // debugger;
    http.open('GET', `display-notifications.php?userId=${userId}`, true);
    http.send();
    
}

const populateNotificationsContainer = notificationslist => {
    if (document.querySelector('.notifications-list') !== null) {
            document.getElementsByClassName('notifications-list')[0].innerHTML = '';
        }
    const notificationsContainer = document.querySelector('.notifications-list');
    const dummyNotification = document.querySelector('.dummy-notification');
    notificationslist.forEach(({name, message}) => {
        if (document.querySelector('.notifications-list') !== null) {
            document.getElementsByClassName('notifications-list')[0].innerHTML = '';
        }
        let notif = dummyNotification.cloneNode(true); 
        notif.setAttribute('class', 'notification');
        let content = notif.querySelector('span');
        content.innerText = `${name} wrote ${message}`;
        notif.style.display = "block";
        notificationsContainer.appendChild(notif);
    });
}

setInterval(displayNotifications, 1000);
