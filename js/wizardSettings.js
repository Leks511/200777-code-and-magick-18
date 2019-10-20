/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-invalid-this */
'use strict';

(function () {
  var wizardCoatElement = document.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');

  var wizardEyesElement = document.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');

  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = document.querySelector('input[name="fireball-color"]');

  var wizard = {
    onEyesChange: function (color) { },
    onCoatChange: function (color) { }
  };

  // Функция смены цвета фаербола
  function changeWizardFireballColor() {
    var newWizardFireballColor = window.util.getRandomValue(window.colors.FIREBALL);
    wizardFireballElement.style.backgroundColor = newWizardFireballColor;
    wizardFireballInput.value = newWizardFireballColor;
  }

  // Смена цвета фаебола по нажатию
  wizardFireballElement.addEventListener('click', function () {
    changeWizardFireballColor();
  });

  // Смена цвета куртки по нажатию
  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.util.getRandomValue(window.colors.COAT);
    this.style.fill = newColor;
    wizardCoatInput.value = newColor;
    wizard.onCoatChange(newColor);
  });

  // Смена цвета глаз по нажатию
  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.util.getRandomValue(window.colors.EYES);
    this.style.fill = newColor;
    wizardEyesInput.value = newColor;
    wizard.onEyesChange(newColor);
  });

  wizardFireballElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, changeWizardFireballColor);
  });

  return window.wizard = wizard;
})();
