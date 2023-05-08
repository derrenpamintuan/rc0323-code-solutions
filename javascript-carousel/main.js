const $character = document.querySelectorAll('.character');
const $container = document.querySelector('.container');
const $index = document.querySelectorAll('.index > .fa-circle');

let currentIndex = 0;

function switchToIndex(targetIndex) {
  for (var i = 0; i < $character.length; i++) {
    if (i === targetIndex) {
      $character[i].className = 'character';
      $index[i].className = 'fas fa-circle';
    } else {
      $character[i].className = 'character hidden';
      $index[i].className = 'far fa-circle';
    }
  }
  currentIndex = targetIndex;
  autoSwitch();
}

let timeOutId;

function autoSwitch() {
  clearTimeout(timeOutId);
  timeOutId = setTimeout(function () {
    switchToIndex(nextIndex());
  }, 2000);
}

$container.addEventListener('click', handleClick);
autoSwitch();

function handleClick(event) {
  if (event.target.matches('.next')) {
    switchToIndex(nextIndex());
  }

  if (event.target.matches('.previous')) {
    switchToIndex(previousIndex());
  }

  for (var i = 0; i < $index.length; i++) {
    if (event.target === $index[i]) {
      switchToIndex(i);
    }
  }
}

function nextIndex() {
  if (currentIndex === $character.length - 1) {
    return 0;
  } else {
    return currentIndex + 1;
  }
}

function previousIndex() {
  if (currentIndex === 0) {
    return $character.length - 1;
  } else {
    return currentIndex - 1;
  }
}
