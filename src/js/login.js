const firstContent = document.getElementsByClassName('.first-content')
const secondContent = document.getElementsByClassName('.second-content')
const toggleToSecond = document.getElementById('.toggleToSecond')
const toggleToFirst = document.getElementById('.toggleToFirst')

toggleToSecond.addEventListener('click', () => {
    firstContent.classList.remove('active');
    secondContent.classList.add('active');
})

toggleToFirst.addEventListener('click', () => {
    secondContent.classList.remove('active');
    firstContent.classList.add('active');
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