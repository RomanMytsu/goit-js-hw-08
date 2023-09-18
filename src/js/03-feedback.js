import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onSubmit);

let dataForm = JSON.parse(localStorage.getItem(LS_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LS_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log(dataForm);
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all fields');
  }
  evt.currentTarget.reset();
  localStorage.removeItem(LS_KEY);
}
