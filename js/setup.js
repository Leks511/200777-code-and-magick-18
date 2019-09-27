'use strict';

var QUANTITY_OF_WIZARDS = 4;

var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

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
