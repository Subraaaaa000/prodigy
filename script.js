window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#222'; // Change background color when scrolled
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  
  // Add active class to the current menu item based on scroll position
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('div[id]');
    const navItems = document.querySelectorAll('nav ul li a');
    
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        const id = section.getAttribute('id');
        navItems.forEach(function(item) {
          item.classList.remove('active');
          if (item.getAttribute('href') === ${id}) {
            item.classList.add('active');
          }
        });
      }
    });
  });