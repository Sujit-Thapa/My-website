// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.section');
const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Form Validation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your message!');
    contactForm.reset();
});

// Theme Toggle
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Theme';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.padding = '10px 15px';
themeToggle.style.background = '#0073e6';
themeToggle.style.color = 'white';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '5px';
themeToggle.style.cursor = 'pointer';

document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll-to-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '70px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px 15px';
scrollToTopButton.style.background = '#0073e6';
scrollToTopButton.style.color = 'white';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.display = 'none';
scrollToTopButton.style.cursor = 'pointer';

document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Shrink Navbar on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '5px';
progressBar.style.backgroundColor = '#0073e6';
progressBar.style.zIndex = '9999';
progressBar.style.width = '0%';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    progressBar.style.width = scrollPercentage + '%';
});
// Initialize Email.js
emailjs.init('your_user_id'); // Replace with your Email.js user ID

// Form Submission
contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const formData = {
        from_name: name,
        from_email: email,
        message: message,
    };

    emailjs.send('your_service_id', 'your_template_id', formData)
        .then(response => {
            alert('Message sent successfully!');
            contactForm.reset();
        })
        .catch(error => {
            alert('Error sending message. Please try again later.');
        });
});
