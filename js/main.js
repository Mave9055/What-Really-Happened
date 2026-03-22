// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Set active nav link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

setActiveNavLink();

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const toggle = header.querySelector('.accordion-toggle');
    
    // Close other accordions
    document.querySelectorAll('.accordion-content').forEach(item => {
      if (item !== content) {
        item.classList.remove('active');
      }
    });
    
    document.querySelectorAll('.accordion-toggle').forEach(item => {
      if (item !== toggle) {
        item.classList.remove('active');
      }
    });
    
    // Toggle current
    content.classList.toggle('active');
    toggle.classList.toggle('active');
  });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const organization = document.getElementById('organization').value;
    const role = document.getElementById('role').value;
    const context = document.getElementById('context').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;
    
    const subject = `Inquiry from ${name} - ${organization}`;
    const body = `Name: ${name}%0AOrganization: ${organization}%0ARole: ${role}%0AContext: ${context}%0A%0AMessage:%0A${message}%0A%0AReply to: ${email}`;
    
    window.location.href = `mailto:info@capitolcontracts.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add fade-in class to elements on page load
window.addEventListener('load', () => {
  document.querySelectorAll('section > h2, .pull-quote, .session-card, .session-row').forEach(el => {
    if (!el.classList.contains('fade-in')) {
      el.classList.add('fade-in');
      observer.observe(el);
    }
  });
});
