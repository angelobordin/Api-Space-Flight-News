const userName = document.getElementById('user');
const password = document.getElementById('password');
const form = document.getElementById('form-login')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userData = {
        user: userName,
        password: password
    };

    
})

async function getArticles() {
    try {
        const result = await fetch('http://localhost:8090/article');
        const dados = await result.json();
        showRegisters(dados);
    } catch (error) {
        alert(error.message);
    };
};

function showRegisters(registers) {
    const main = document.querySelector('main');
    for (let register of registers) {
        main.innerHTML += `<p>${register.title}</p>`
    };
}
// getArticles();