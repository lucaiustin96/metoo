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
    const notificationsContainer = document.querySelector('.notifications-list');
    const dummyNotification = document.querySelector('.dummy-notification');
    notificationslist.forEach(({name, message}) => {
        let notif = dummyNotification.cloneNode(true); 
        notif.setAttribute('class', 'notification');
        let content = notif.querySelector('span');
        content.innerText = `${name} wrote ${message}`;
        notif.style.display = "block";
        notificationsContainer.appendChild(notif);
    });
}

setTimeout(displayNotifications, 1000);
