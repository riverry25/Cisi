const navbar = document.getElementById('navbar');
const toggle = document.getElementById('toggle');
const hamburger = document.getElementById('hamburger-menu');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    navbar.classList.remove('opacity-0' );
    navbar.classList.add('opacity-100' );
  } else {
    navbar.classList.add('opacity-0' );
    navbar.classList.remove('opacity-100' );
  }
});

// Deteksi klik di luar navbar dan hamburger
document.addEventListener('click', (event) => {
  // Jika navbar sedang terbuka
  if (toggle.checked) {
    // Jika klik bukan di navbar dan bukan di hamburger
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
      navbar.classList.add('opacity-0');
      navbar.classList.remove('opacity-100');
    }
  }
});
