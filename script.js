document.getElementById('cta-button').addEventListener('click', function() {
    // Scroll to the "Paslaugos" section smoothly
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Dėkojame už susisiekimą! Greitai su jumis susisieksime.');
    this.reset();
});