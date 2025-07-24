document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular inicio de sesión exitoso
        alert('¡Inicio de sesión exitoso! Serás redirigido a la página de inicio');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });
});