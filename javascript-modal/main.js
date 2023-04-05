const $open = document.querySelector('.open');
const $close = document.querySelector('.close');
const $background = document.querySelector('.background');

function openModal(event) {
  $background.style.display = 'flex';
}

function closeModal(event) {
  $background.style.display = 'none';
}

$open.addEventListener('click', openModal);
$close.addEventListener('click', closeModal);
