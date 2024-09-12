// Initialisation d'EmailJS
(function() {
    emailjs.init("csaavtxg0Jb0SDrtw"); // Remplace TON_USER_ID_EMAILJS par ton vrai user ID EmailJS
})();

// Formulaire de contact
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_1cjyzga', 'template_cgjz1bk', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            formMessage.textContent = "Votre message a été envoyé avec succès!";
            formMessage.style.color = "green";
        }, function(error) {
            console.log('FAILED...', error);
            formMessage.textContent = "Erreur lors de l'envoi du message. Veuillez réessayer.";
            formMessage.style.color = "red";
        });

    form.reset();
});



// Animation d'apparition des sections au scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, {
    threshold: 0.2 // Le pourcentage de la section visible pour déclencher l'animation
});

// Observer chaque section pour déclencher l'animation lorsqu'elle apparaît dans le viewport
sections.forEach(section => {
    observer.observe(section);
});

// Barre de navigation change de couleur au défilement
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#6a0dad'; // Couleur violette plus claire lors du défilement
    } else {
        nav.style.backgroundColor = '#6a0dad'; // Reste violette en haut de la page
    }
});




