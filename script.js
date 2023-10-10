const navIcon = document.querySelector('.nav-icon');
const btnFront = document.querySelectorAll('.btn-turn-front');
const btnBack = document.querySelectorAll('.btn-turn-back');

navIcon.addEventListener('click', () => {
   navIcon.parentElement.classList.toggle('change');
});

btnFront.forEach((btn) => {
   btn.addEventListener('click', () => {
      btn.parentElement.parentElement.classList.add('change');
   });
});
btnBack.forEach((btn) => {
   btn.addEventListener('click', () => {
      btn.parentElement.parentElement.classList.remove('change');
   });
});
