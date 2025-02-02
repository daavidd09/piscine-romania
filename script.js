document.addEventListener('DOMContentLoaded', function () {
    // Inicialización de EmailJS - esta parte ya no es necesaria si no se usa EmailJS
    // emailjs.init('sMNDwueuZxnqBhT13');

    const cotizarButton = document.getElementById('solicitar-cotizare');
    cotizarButton.addEventListener('click', function () {
        document.getElementById('cotizare-modal').style.display = 'block';
    });

    const closeButton = document.getElementsByClassName('close')[0];
    closeButton.addEventListener('click', function () {
        document.getElementById('cotizare-modal').style.display = 'none';
    });

    const cotizacionForm = document.getElementById('cotizare-form');
    cotizacionForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevenir la acción predeterminada de envío para manipulación personalizada

        const nume = document.getElementById('nume').value;
        const telefon = document.getElementById('telefon').value;
        const email = document.getElementById('email').value;

        // Actualiza el contenido de la ventana modal con los datos ingresados
        document.getElementById('modal-nume').textContent = nume;
        document.getElementById('modal-telefon').textContent = telefon;
        document.getElementById('modal-email').textContent = email;

        // Si prefieres manejar la visualización de un mensaje de éxito o error, puedes hacerlo aquí
        alert('Tu solicitud ha sido enviada con éxito. Nos pondremos en contacto contigo pronto.');

        cotizacionForm.reset(); // Limpiar el formulario después del envío
        document.getElementById('cotizare-modal').style.display = 'none'; // Cerrar la ventana modal
    });
});
