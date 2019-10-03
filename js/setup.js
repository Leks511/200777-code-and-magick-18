'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var QUANTITY_OF_WIZARDS = 4;

var setupWindow = document.querySelector('.setup');

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomValue(arr) {
  return arr[getRandomIndex(0, arr.length - 1)];
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function addWizardsToDom(wizards) {
  var wizardsListFragment = new DocumentFragment();

  for (var i = 0; i < similarWizards.length; i++) {
    wizardsListFragment.appendChild(renderWizard(similarWizards[i]));
  }

  wizards.appendChild(wizardsListFragment);
}

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var similarWizards = [];

for (var i = 0; i < QUANTITY_OF_WIZARDS; i++) {
  similarWizards[i] = {
    name: getRandomValue(names) + ' ' + getRandomValue(surnames),
    coatColor: getRandomValue(coatColors),
    eyesColor: getRandomValue(eyesColors)
  }
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsList = document.querySelector('.setup-similar-list');

addWizardsToDom(wizardsList);

var setupSimiliar = document.querySelector('.setup-similar');
setupSimiliar.classList.remove('hidden');

var setupOpenBtn = document.querySelector('.setup-open');
var setupCloseBtn = setupWindow.querySelector('.setup-close');
var setupOpenIcn = document.querySelector('.setup-open-icon');
var setupSubmitBtn = setupWindow.querySelector('.setup-submit');
var setupForm = setupWindow.querySelector('.setup-wizard-form');

function onSetupWindowEscPress(evt) {
  if ((evt.keyCode === ESC_KEYCODE) && (evt.target !== wizardNameInput)) {
    closeSetupWindow();
  }
}

function openSetupWindow() {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onSetupWindowEscPress);
}

function closeSetupWindow() {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onSetupWindowEscPress);
}

setupOpenBtn.addEventListener('click', function() {
  openSetupWindow();
});

setupCloseBtn.addEventListener('click', function() {
  closeSetupWindow();
});

setupOpenIcn.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetupWindow();
  }
});

setupCloseBtn.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetupWindow();
  }
});

function checkFormValidity() {
  if (wizardNameInput.validity) {
    setupForm.sumbit();
  }
}

setupSubmitBtn.addEventListener('click', function () {
  checkFormValidity();
});

setupSubmitBtn.addEventListener('keydown', function () {
  if (evt.keyCode === ENTER_KEYCODE) {
    checkFormValidity();
  }
});

var wizardNameInput = setupWindow.querySelector('.setup-user-name');

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

var fireballColors = [
  "#ee4830",
  "#30a8ee",
  "#5ce6c0",
  "#e848d5",
  "#e6e848"
];

var wizardCoat = setupWindow.querySelector('.setup-wizard .wizard-coat');
var wizardCoatInput = setupWindow.querySelector('input[name="coat-color"]');

var wizardEyes = setupWindow.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = setupWindow.querySelector('input[name="eyes-color"]');

var wizardFireball = setupWindow.querySelector('.setup-fireball-wrap');
var wizardFireballInput = setupWindow.querySelector('input[name="fireball-color"]');

function changeWizardCoatColor() {
  var newWizardCoatColor = getRandomValue(coatColors);
  wizardCoat.style.fill = newWizardCoatColor;
  wizardCoatInput.value = newWizardCoatColor;
}

function changeWizardEyesColor() {
  var newWizardEyesColor = getRandomValue(eyesColors);
  wizardEyes.style.fill = newWizardEyesColor;
  wizardEyesInput.value = newWizardEyesColor;
}

function changeWizardFireballColor() {
  var newWizardFireballColor = getRandomValue(fireballColors);
  wizardFireball.style.backgroundColor = newWizardFireballColor;
  wizardFireballInput.value = newWizardFireballColor;
}

wizardCoat.addEventListener('click', function() {
  changeWizardCoatColor();
});

wizardCoat.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    changeWizardCoatColor();
  }
});

wizardEyes.addEventListener('click', function() {
  changeWizardEyesColor();
});

wizardEyes.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    changeWizardEyesColor();
  }
});

wizardFireball.addEventListener('click', function () {
  changeWizardFireballColor();
});

wizardFireball.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    changeWizardFireballColor();
  }
});


var setupWindowHandler = document.querySelector('.upload');

setupWindowHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  function onMouseMove(moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
    setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
  }

  function onMouseUp(upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      function onClickPreventDefault(evt) {
        evt.preventDefault();
        setupWindowHandler.removeEventListener('click', onClickPreventDefault);
      }
      setupWindowHandler.addEventListener('click', onClickPreventDefault);
    }
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

});
