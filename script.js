document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('sMNDwueuZxnqBhT13');

    const cotizarButton = document.getElementById('solicitar-cotizare');
    cotizarButton.addEventListener('click', function () {
        // Mostrar la ventana modal cuando se hace clic en el botón
        document.getElementById('cotizare-modal').style.display = 'flex'; /* Mostrar el modal */
    });

    const closeButton = document.getElementsByClassName('close')[0];
    closeButton.addEventListener('click', function () {
        // Cerrar el modal cuando se hace clic en el botón de cerrar
        document.getElementById('cotizare-modal').style.display = 'none';
    });

    const cotizacionForm = document.getElementById('cotizare-form');
    cotizacionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nume = document.getElementById('nume').value;
        const telefon = document.getElementById('telefon').value;
        const email = document.getElementById('email').value;

        // Actualizamos la tabla en la ventana modal con los datos ingresados
        document.getElementById('modal-nume').textContent = nume;
        document.getElementById('modal-telefon').textContent = telefon;
        document.getElementById('modal-email').textContent = email;

        const templateParams = {
            nume: nume,
            telefon: telefon,
            email: email,
        };

        emailjs.send('service_otwgjg9', 'template_096i836', templateParams)
            .then(function (response) {
                alert('Solicitarea ta a fost trimisă cu succes! Te vom contacta în curând.');
                cotizacionForm.reset();
                document.getElementById('cotizare-modal').style.display = 'none'; /* Ocultar la modal después de enviar */
            }, function (error) {
                alert('A apărut o eroare. Te rugăm să încerci din nou mai târziu.');
            });
    });
});
