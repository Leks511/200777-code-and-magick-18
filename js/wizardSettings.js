'use strict';

(function () {
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');

  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');

  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = document.querySelector('input[name="fireball-color"]');

  function changeWizardCoatColor() {
    var newWizardCoatColor = window.util.getRandomValue(window.colors.COAT);
    wizardCoat.style.fill = newWizardCoatColor;
    wizardCoatInput.value = newWizardCoatColor;
  }

  function changeWizardEyesColor() {
    var newWizardEyesColor = window.util.getRandomValue(window.colors.EYES);
    wizardEyes.style.fill = newWizardEyesColor;
    wizardEyesInput.value = newWizardEyesColor;
  }

  function changeWizardFireballColor() {
    var newWizardFireballColor = window.util.getRandomValue(window.colors.FIREBALL);
    wizardFireball.style.backgroundColor = newWizardFireballColor;
    wizardFireballInput.value = newWizardFireballColor;
  }

  wizardCoat.addEventListener('click', function () {
    changeWizardCoatColor();
  });

  wizardCoat.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, changeWizardCoatColor);
  });

  wizardEyes.addEventListener('click', function () {
    changeWizardEyesColor();
  });

  wizardEyes.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, changeWizardEyesColor);
  });

  wizardFireball.addEventListener('click', function () {
    changeWizardFireballColor();
  });

  wizardFireball.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, changeWizardFireballColor);
  });
})();
