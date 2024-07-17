'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(modal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log(modal);
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Add event listeners to open modal buttons
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// Add event listeners to close modal button and overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


//close when pressing on esc or enter btn
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});