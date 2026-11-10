const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});




const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
    const input = newsletterForm.querySelector('input');
    const errorMessage = document.getElementById('email-error');

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!input.validity.valid) {

            errorMessage.style.display = 'block';
            input.classList.add('invalid-input');


            if (input.validity.valueMissing) {
                errorMessage.textContent = 'An email address is required.';
            } else if (input.validity.typeMismatch) {
                errorMessage.textContent = 'Please include an "@" in the email address.';
            }
        } else {

            errorMessage.style.display = 'none';
            input.classList.remove('invalid-input');

            input.value = '';
            window.location.href = '404.html';
        }
    });


    input.addEventListener('input', function () {
        if (input.validity.valid) {
            errorMessage.style.display = 'none';
            input.classList.remove('invalid-input');
        }
    });
}