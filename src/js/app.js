const btnEntrar = document.getElementById('entrar-js')
const btnIncrever = document.getElementById('inscrever-js')

const body = document.querySelector('body')

btnEntrar.addEventListener('click', () => {
    body.className = "entrar-js"
})

btnIncrever.addEventListener('click', () => {
    body.className = "inscrever-js"
})