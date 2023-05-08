const $countdown = document.querySelector('.countdown-display');

let count = 4;
let nIntervalId = null;
nIntervalId = setInterval(changeText, 1000);

function changeText() {
  count--;
  if (count > 0) {
    $countdown.textContent = count;
  } else {
    $countdown.textContent = '~Earth Beeelooowww Us~';
    clearInterval(nIntervalId);
  }
}
