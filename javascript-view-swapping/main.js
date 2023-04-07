const $tabContainer = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.active')) {
    return;
  } else {
    for (let i = 0; i < $tabList.length; i++) {
      if (event.target === $tabList[i]) {
        event.target.className = 'tab active';
      } else {
        $tabList[i].className = 'tab';
      }
    }
  }

  if (event.target) {
    const attribute = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewList.length; i++) {
      if ($viewList[i].getAttribute('data-view') === attribute) {
        $viewList[i].className = 'view';
      } else {
        $viewList[i].className = 'view hidden';
      }
    }
  }
}
