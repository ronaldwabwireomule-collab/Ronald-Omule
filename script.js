// Toggle side menu
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const overlay = document.querySelector('.overlay');
  const modeToggle = document.querySelector('.mode-toggle');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      sideMenu.classList.toggle('open');
      overlay.classList.toggle('show');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function() {
      sideMenu.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  // Dark/Light mode toggle
  if (modeToggle) {
    modeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const icon = modeToggle.querySelector('i');
      if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
      } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (modeToggle) {
      modeToggle.querySelector('i').className = 'fas fa-sun';
    }
  }
});