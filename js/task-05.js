const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function(event) {
  const name = event.target.value;

  if (name !== '') {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});