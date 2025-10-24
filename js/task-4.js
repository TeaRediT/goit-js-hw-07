const formEl = document.querySelector('.login-form');
const emailInput = formEl.firstElementChild.firstElementChild;

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.currentTarget.elements.email;
  const pass = event.currentTarget.elements.password;

  if (!email.value || !pass.value) {
    alert('All form fields must be filled in');
    return;
  }

  const obj = {
    [email.name]: email.value.trim(),
    [pass.name]: pass.value.trim(),
  };

  console.log(obj);
  event.currentTarget.reset();
});
