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
    let data = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value
    };
    for (let i = 0; i < counter; i++) {
        data[`ability${i}`] = document.querySelector(`#ability-${i}`).value;
    }
    console.log(data);
}

function validateForm() {
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    
    if (firstName === '') {
        return false;
    }
    if (lastName === '') {
        return false;
    }

    for (let i = 0; i < counter; i++) {
        let ability = document.querySelector(`#ability-${i}`).value;
        if (ability === '') {
            return false;
        }
    }

    return true;
}