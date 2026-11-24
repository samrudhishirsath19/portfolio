// Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn){
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Scroll Animation
const cards = document.querySelectorAll('.project-card, .about-mini, .contact-wrap');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});
cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

// Typing Effect - Fakt Full Stack Java Developer
const typingEl = document.getElementById('typing');
if(typingEl){
  const text = "Full Stack Java Developer";
  let j = 0;
  let deleting = false;

  function type(){
    if(!deleting){
      j++;
      typingEl.textContent = text.slice(0, j);
    } else {
      j--;
      typingEl.textContent = text.slice(0, j);
    }

    let speed = deleting ? 40 : 100;

    if(j === text.length && !deleting){
      deleting = true;
      speed = 2000;
    }
    if(j === 0 && deleting){
      deleting = false;
      speed = 500;
    }
    setTimeout(type, speed);
  }
  type();
}

// Contact Form
const form = document.querySelector('form');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Samrudhi will contact you soon.');
    form.reset();
  });
}