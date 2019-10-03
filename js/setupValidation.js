'use strict';

(function() {
  var setupForm = document.querySelector('.setup-wizard-form');
  var setupSubmitBtn = setupForm.querySelector('.setup-submit');

  function checkFormValidity() {
    if (wizardNameInput.validity) {
      setupForm.sumbit();
    }
  }

  setupSubmitBtn.addEventListener('click', function () {
    checkFormValidity();
  });

  setupSubmitBtn.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, checkFormValidity);
  });

  var wizardNameInput = setupForm.querySelector('.setup-user-name');

  wizardNameInput.addEventListener('invalid', function (evt) {
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
})();
