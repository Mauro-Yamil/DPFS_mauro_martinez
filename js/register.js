document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar contraseñas coincidan
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        // Simular registro exitoso
        alert('¡Registro exitoso! Serás redirigido a la página de inicio');
        
        // Redirigir al home después de 1 segundo
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });
});