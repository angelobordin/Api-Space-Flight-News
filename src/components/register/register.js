const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const form = document.getElementById('form-register')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userData = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
    };

    registerUser(userData);
});

async function registerUser(userData) {
    try {
        let result;
        await fetch('http://localhost:8090/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            result = data
        });
     
        const userRegistered = result.status;

        if (!userRegistered) alert(result.message);
        window.location.href = '../login/login.html'
    } catch (error) {
        return error.message;
    }
}