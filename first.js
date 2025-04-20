// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Scroll Reveal Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, {
    threshold: 0.2,
  });
  
  document.querySelectorAll('.section, .card').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
  
  // Button Ripple Effect
  document.querySelectorAll('.btn-join').forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Optional Welcome Audio Autoplay (Uncomment if needed)
  /*
  window.addEventListener('load', () => {
    const audio = new Audio('audio/welcome.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => {
      console.warn('Autoplay blocked. User must interact to play sound.');
    });
  });
  */
  