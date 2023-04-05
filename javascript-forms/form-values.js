const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', prevent);

function prevent(event) {
  event.preventDefault();
  const values = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log('messageData:', values);
  $form.reset();
}
