document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile (Hamburguer)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const icon = mobileMenu.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }

    // 2. Interceptação do Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Obrigado pelo contato, ${name}! Nossa equipe da Ruralzoo retornará em breve no e-mail: ${email}.`);
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos do formulário.');
            }
        });
    }
});