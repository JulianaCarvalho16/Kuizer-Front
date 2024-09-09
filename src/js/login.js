
document.getElementById('formulario').addEventListener('submit', async function(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value

    try {
        const response = await fetch('http://localhost:3000/kuizer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nome, email, senha}),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Erro ao enviar os dados: ', error);
    }
})