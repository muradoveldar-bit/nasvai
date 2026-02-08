const primaryButtons = document.querySelectorAll('.primary-button');

primaryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.closest('form')) {
      button.closest('form').reset();
    }
    alert('Демо-режим: действие зарегистрировано.');
  });
});
