document.addEventListener('DOMContentLoaded', function () {
    const cotizarButton = document.getElementById('solicitar-cotizare');
    cotizarButton.addEventListener('click', function () {
        document.getElementById('cotizare-modal').style.display = 'block';
    });

    const closeButton = document.getElementsByClassName('close')[0];
    closeButton.addEventListener('click', function () {
        document.getElementById('cotizare-modal').style.display = 'none';
    });

    // Eliminar la interceptación del evento 'submit', ya que no necesitamos prevenirlo
    // El formulario será manejado directamente por FormSubmit
});