function loadTopLocations() {
    let http = new XMLHttpRequest();
    let response = "";
    let index;
    let parentDiv = document.querySelector('.locations');    
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            response = JSON.parse(http.responseText);
            index = response.length < 4 ? response.length : 4;
            for (let i = 0; i < index; i++) {
                let div = document.createElement('div');
                div.setAttribute('class', 'location-item');
                parentDiv.appendChild(div);

                let location = document.createElement('p');
                location.setAttribute('class', 'location-name');
                location.innerHTML = response[i].location;
                div.appendChild(location);

                let address = document.createElement('p');
                address.setAttribute('class', 'location-address');
                address.innerHTML = response[i].address;
                div.appendChild(address);
            }
        }
    }
    
    http.open('GET', 'display-locations.php', true);
    http.send();
    
}

window.onload = loadTopLocations();