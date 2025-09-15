// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const targetId = this.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Contact form submission feedback
const form = document.querySelector('form[action*="formspree.io"]');
const btnSend = form.querySelector('button[type="submit"]');
const messageField = form.querySelector('#message');

form.addEventListener('submit', function(event) {
  btnSend.textContent = 'Sending...';
  btnSend.disabled = true;
});

window.addEventListener('load', () => {
  // Optionally, after submission redirect or show a thank you message could be handled
  // For now, restore send button if user revisits the form page
  btnSend.textContent = 'Send';
  btnSend.disabled = false;
});

// Image hover animation for project items
document.querySelectorAll('.project-item img').forEach(img => {
  img.style.transition = 'transform 0.3s ease';
  img.parentElement.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
  });
  img.parentElement.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});
