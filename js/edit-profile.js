let counter = 3;

function addAbility() {
    let addAbilityBtn = document.querySelector('#addAbilities');
    let form = document.querySelector('.completeFormL.widthForm');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `ability-${counter}`);
    input.setAttribute('name', 'abilities');
    input.setAttribute('placeholder', 'Your ability here');
    form.insertBefore(input, addAbilityBtn);
    counter += 1;
}

function submitChanges() {
    if (!validateForm()) {
        alert('All fields are required!');
        return false;
    }
    let data = {};
    for (let i = 0; i < counter; i++) {
        data[`ability${i}`] = document.querySelector(`#ability-${i}`).value;
    }

    for (let property in data) {
        let param = `abilities=${data[property]}&userId=${userId}`;
        let http = new XMLHttpRequest();
        
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                window.location.href = window.location.pathname;
            }
        }

        http.open('POST', 'add-abilities.php', true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send(param);

    }
}

function validateForm() {
    for (let i = 0; i < counter; i++) {
        let ability = document.querySelector(`#ability-${i}`).value;
        if (ability === '') {
            return false;
        }
    }

    return true;
}
