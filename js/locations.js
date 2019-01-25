function loadTopLocations() {
    let http = new XMLHttpRequest();
    let response = "";
    let parentDiv = document.querySelector('.locations');    
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            response = JSON.parse(http.responseText);

            for (let i = 0; i < response.length; i++) {
                let div = document.createElement('div');
                div.setAttribute('class', 'location-item');
                parentDiv.appendChild(div);

                let location = document.createElement('p');
                location.setAttribute('class', 'location-name');
                location.innerHTML = response[i].location;
                div.appendChild(location);

                let address = document.createElement('p');
                address.setAttribute('class', 'location-address');
                address.innerHTML = 'Strada Pacurari, Nr. 4, Iasi';
                div.appendChild(address);
            }
        }
    }
    
    http.open('GET', 'display-locations.php', true);
    http.send();
    
}

window.onload = loadTopLocations();