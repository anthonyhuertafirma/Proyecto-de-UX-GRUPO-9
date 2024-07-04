document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    console.log('Formulario enviado'); // Verificar que el evento se captura

    const email = event.target.email.value;
    const contrasena = event.target.password.value;

    console.log('Email:', email); // Verificar que los datos se capturan
    console.log('Contraseña:', contrasena);

    const response = await fetch('http://localhost:8080/api/usuarios/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, contrasena: contrasena})
    });

    if (response.ok) {
        const result = await response.json();
        console.log('Login exitoso:', result.user); // Verificar la respuesta
        alert('Inicio exitoso! Bienvenido, ' + result.user);
        // Redirigir a otra página después del inicio de sesión exitoso
        window.location.href = '../front-end/panel_adm.html';
    } else {
        const errorText = await response.json();
        console.log('Error:', errorText);
        document.getElementById('errorMessage').innerText = errorText.message || 'Error during login';
        document.getElementById('errorMessage').style.display = 'block';
    }
});