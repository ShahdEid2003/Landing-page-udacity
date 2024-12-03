// Define global variables
const navbarList = document.querySelector('.navbar__list');
const sections = document.querySelectorAll('section');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Build Navbar
function buildNavbar() {
  sections.forEach((section) => {
    const navItem = document.createElement('li');
    navItem.innerHTML = `<a href="#${section.id}">${section.dataset.nav}</a>`;
    navbarList.appendChild(navItem);
  });
}

// Add active class based on viewport
function setActiveSection() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const navItem = document.querySelector(`a[href="#${section.id}"]`).parentElement;
    if (rect.top >= -100 && rect.top <= 300) {
      section.classList.add('active');
      navItem.classList.add('active');
    } else {
      section.classList.remove('active');
      navItem.classList.remove('active');
    }
  });
}

// Smooth Scroll to Section
function enableSmoothScroll() {
  navbarList.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      const targetSection = document.querySelector(e.target.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Scroll Top Button Visibility
function toggleScrollTopBtn() {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add Event Listeners
document.addEventListener('scroll', () => {
  setActiveSection();
  toggleScrollTopBtn();
});
scrollTopBtn.addEventListener('click', scrollToTop);

// Call functions
buildNavbar();
enableSmoothScroll();
