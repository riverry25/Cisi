const navbar = document.getElementById('navbar');
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    navbar.classList.remove('opacity-0' );
    navbar.classList.add('opacity-100' );
  } else {
    navbar.classList.add('opacity-0' );
    navbar.classList.remove('opacity-100' );
  }
});

      

