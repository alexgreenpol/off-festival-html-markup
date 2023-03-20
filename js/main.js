const toggleButton = document.querySelector('.toggle-menu');
const header = document.querySelector('.header');
toggleButton.addEventListener('click', function () {
  header.classList.toggle('toggle');
});

document.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 200) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
