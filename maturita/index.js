
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scroll', window.scrollY > 0);
  });


  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');
  
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('open'); 
    });
  });
  

  window.addEventListener('wheel', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scroll', window.scrollY > 0);
  });
  


  