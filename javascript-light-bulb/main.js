function handleClick(event) {
  if (($button.className) === 'button off' && ($background.className === 'background dark')) {
    $button.className = 'button on';
    $background.className = 'background light';
  } else {
    $button.className = 'button off';
    $background.className = 'background dark';
  }
}

const $button = document.querySelector('.button');
const $background = document.querySelector('.background');

$button.addEventListener('click', handleClick);
