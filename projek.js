// Toggle Menu Mobile
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
  
    if (menuToggle && menu) {
      menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');
      });
  
      const menuLinks = document.querySelectorAll('.menu a');
      menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('active');
          menuToggle.classList.remove('active');
        });
      });
    }
  }
  
  // Filter Proyek
  function setupProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;
  
        projectCards.forEach(card => {
          const category = card.dataset.category;
          if (filter === 'all' || filter === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Animasi Scroll
  function setupScrollAnimation() {
    const sections = document.querySelectorAll('section');
  
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.7;
      sections.forEach(section => {
        if (scrollPosition > section.offsetTop) {
          section.classList.add('active');
        }
      });
    });
  }
  
  // Form Kontak
  function setupContactForm() {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
  
      if (name && email && subject && message) {
        alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
        form.reset();
      } else {
        alert('Mohon isi semua kolom yang diperlukan.');
      }
    });
  }
  
  // Animasi Skill Bar
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
  
    skillBars.forEach(bar => {
      const targetWidth = bar.style.width;
      bar.style.width = '0';
  
      setTimeout(() => {
        bar.style.transition = 'width 1.5s ease';
        bar.style.width = targetWidth;
      }, 500);
    });
  }
  
  // Jalankan semua fungsi saat DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupProjectFilter();
    setupScrollAnimation();
    setupContactForm();
    animateSkillBars();
  });
       