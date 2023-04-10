const $chars = document.querySelectorAll('span');

let index = 0;

function type(event) {
  if (event.key === $chars[index].textContent) {
    $chars[index].className = 'correct';
    index++;
    $chars[index].className = 'active';
  } else if (event.key !== $chars[index].textContent) {
    $chars[index].className = 'wrong';
  }
}

window.addEventListener('keydown', type);
