import "bootstrap";

const initUpdateNavbarOnScroll = () => {
  const navbar = document.getElementById('nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 1) {
        navbar.classList.add('nav-scrolled');
      } else
        navbar.classList.remove('nav-scrolled');
    });
  }
}

initUpdateNavbarOnScroll();
