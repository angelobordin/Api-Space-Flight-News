import {redirect} from './utils/GenericFunctions.js';

const userEmail = document.getElementById('userEmail');
const password = document.getElementById('password');
const form = document.getElementById('form-login')

form.addEventListener('submit', (event) => {
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

// async function getArticles() {
//     try {
//         const result = await fetch('http://localhost:8090/article');
//         const dados = await result.json();
//         showRegisters(dados);
//     } catch (error) {
//         alert(error.message);
//     };
// };

// function showRegisters(registers) {
//     const main = document.querySelector('main');
//     for (let register of registers) {
//         main.innerHTML += `<p>${register.title}</p>`
//     };
// }

// getArticles();