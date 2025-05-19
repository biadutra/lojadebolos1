console.log('script.js carregado');

 document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navCenter = document.querySelector('.nav-center');

  menuToggle.addEventListener('click', () => {
    navCenter.classList.toggle('active');
  });
});
