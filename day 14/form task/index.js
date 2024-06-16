document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const food = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(e => e.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    if (food.length < 2) {
        alert('Please choose at least 2 food options.');
        return;
    }

    const tbody = document.querySelector('#userTable tbody');
    const newRow = tbody.insertRow();

    newRow.insertCell().textContent = firstName;
    newRow.insertCell().textContent = lastName;
    newRow.insertCell().textContent = email;
    newRow.insertCell().textContent = address;
    newRow.insertCell().textContent = pincode;
    newRow.insertCell().textContent = gender;
    newRow.insertCell().textContent = food.join(', ');
    newRow.insertCell().textContent = state;
    newRow.insertCell().textContent = country;

    document.getElementById('userForm').reset();
});

