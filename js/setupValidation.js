'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupForm = setupWindow.querySelector('.setup-wizard-form');
  var wizardNameInput = setupWindow.querySelector('.setup-user-name');

  wizardNameInput.addEventListener('invalid', function () {
    if (wizardNameInput.validity.tooShort) {
      wizardNameInput.setCustomValidity('Имя персонажа не может содержать менее 2 символов');
    } else if (wizardNameInput.validity.tooLong) {
      wizardNameInput.setCustomValidity('Максимальная длина имени персонажа — 25 символов');
    } else if (wizardNameInput.validity.valueMissing) {
      wizardNameInput.setCustomValidity('Обязательное поле');
    } else {
      wizardNameInput.setCustomValidity('');
    }
  });

  wizardNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  setupForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(setupForm), window.closeSetupWindow, window.backend.onErrorFormSubmit);
    evt.preventDefault();
  });
})();
