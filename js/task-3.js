const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const text = event.currentTarget.value.trim();
  if (text.length > 0) spanEl.textContent = text;
  else spanEl.textContent = 'Anonymous';
});
