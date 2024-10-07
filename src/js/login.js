const btnEntrar = document.getElementById('entrar-js')
const btnIncrever = document.getElementById('inscrever-js')

const body = document.querySelector('body')

btnEntrar.addEventListener('click', () => {
    body.className = "entrar-js"
})

btnIncrever.addEventListener('click', () => {
    body.className = "inscrever-js"
})

document.getElementById('registerForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value

    
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password}),
        });

        const data = await response.json();
        alert(data.message);
    
})

document.getElementById('loginForm')?.addEventListener('submit', async function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password}),
    }) 
    const data = await response.json();
    alert(data.message);
})