document.addEventListener('DOMContentLoaded', function () {

    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
            toggle.classList.toggle('active');
        });

        document.addEventListener('click', function (e) {
            if (!e.target.closest('.navbar')) {
                navLinks.classList.remove('open');
                toggle.classList.remove('active');
            }
        });
    }

    // Close mobile nav on link click
    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navLinks) {
                navLinks.classList.remove('open');
                if (toggle) toggle.classList.remove('active');
            }
        });
    });

    // Active nav link highlight
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(function (link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // CTA form
    const ctaForm = document.getElementById('ctaForm');
    if (ctaForm) {
        ctaForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const input = this.querySelector('input');
            const btn = this.querySelector('button');
            if (input && input.value.trim()) {
                const originalText = btn.textContent;
                btn.textContent = 'Recebemos seu interesse!';
                btn.style.pointerEvents = 'none';
                input.value = '';
                setTimeout(function () {
                    btn.textContent = originalText;
                    btn.style.pointerEvents = '';
                }, 3000);
            }
        });
    }

    // Navbar shadow on scroll & nav logo visibility
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Set initial state
        if (window.scrollY <= 80) {
            navbar.classList.remove('scrolled');
        }
    }

});
