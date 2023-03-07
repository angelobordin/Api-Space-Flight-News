import {redirect} from './utils/GenericFunctions.js';

// TELA DE LOGIN
const divLogin = document.getElementById('divLogin');
const formLogin = document.getElementById('form-login');
const userEmail = document.getElementById('userEmail');
const password = document.getElementById('userPassword');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const userData = {
        email: userEmail.value,
        password: password.value
    };
    
    authUser(userData);
});

async function authUser(userData) {
    try {
        let result;
        await fetch('http://localhost:8090/user/auth', {
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
        
        const userAuthenticated = result.status;

        if (userAuthenticated) {
            redirect('./home/home.html');
            return;
        }

        alert(result.message);
    } catch (error) {
        return error.message;
    }
};

// TELA DE REGISTRO
const divRegister = document.getElementById('divRegister');
const formRegister = document.getElementById('form-register');
const newUserName = document.getElementById('newUserName');
const newUserEmail = document.getElementById('newUserEmail');
const newUserPassword = document.getElementById('newUserPassword');
const newUserConfirmPassword = document.getElementById('newUserConfirmPassword');
const divWrongPassword = document.getElementById('wrongPassword');

divWrongPassword.style.display = 'none';
divRegister.style.display = 'none';

formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    if (newUserConfirmPassword.value === newUserPassword.value) {
            const userData = {
            name: newUserName.value,
            email: newUserEmail.value,
            password: newUserPassword.value,
        };
        
        registerUser(userData);
    } else {
        divWrongPassword.style.display = 'block';
    }

    formRegister.reset();
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

        if (userRegistered) showDiv();

        alert(result.message);
    } catch (error) {
        return error.message;
    }
}

// VERIFICA QUAL TELA SERA MOSTRADA
const btnToLogin = document.getElementById('btnToLogin');
const btnToRegister = document.getElementById('btnToRegister');
btnToRegister.addEventListener('click', showDiv);
btnToLogin.addEventListener('click', showDiv);

function showDiv() {
    if (divRegister.style.display === 'none') {
        divLogin.style.display = 'none';
        divRegister.style.display = 'block';
    } else {
        divRegister.style.display = 'none';
        divLogin.style.display = 'block';
    };
};