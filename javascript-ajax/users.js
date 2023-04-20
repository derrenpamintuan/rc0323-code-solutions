const $userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  const users = xhr.response;
  for (let i = 0; i < users.length; i++) {
    const $li = document.createElement('li');
    const user = users[i];
    $li.textContent = user.name;
    $userList.appendChild($li);
  }
});

xhr.send();
