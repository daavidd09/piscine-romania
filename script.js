\document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('sMNDwueuZxnqBhT13');
    
    const cotizarButton = document.getElementById('solicitar-cotizare');
    const modal = document.getElementById('cotizare');
    const closeModal = document.querySelector('.close');
    
    cotizarButton.addEventListener('click', function () {
        modal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    const cotizacionForm = document.getElementById('cotizare-form');
    cotizacionForm.addEventListener('submit', function (e) {
        e.preventDefault(); 
        const nume = document.getElementById('nume').value;
        const telefon = document.getElementById('telefon').value;
        const email = document.getElementById('email').value;
        
        const templateParams = {
            nume: nume,
            telefon: telefon,
            email: email,
        };
        
        emailjs.send('service_otwgjg9', 'template_096i836', templateParams)
            .then(function (response) {
                alert('Solicitarea ta a fost trimisă cu succes! Te vom contacta în curând.');
                cotizacionForm.reset();
                modal.style.display = 'none';
            }, function (error) {
                alert('A apărut o eroare. Te rugăm să încerci din nou mai târziu.');
            });
    });
});
