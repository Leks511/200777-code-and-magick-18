'use strict';

(function() {
  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var QUANTITY_OF_WIZARDS = 4;

  var similarWizards = [];

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsList = document.querySelector('.setup-similar-list');
  var setupSimiliar = document.querySelector('.setup-similar');

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

  for (var i = 0; i < QUANTITY_OF_WIZARDS; i++) {
    similarWizards[i] = {
      name: window.util.getRandomValue(NAMES) + ' ' + window.util.getRandomValue(SURNAMES),
      coatColor: window.util.getRandomValue(window.colorConsts.COAT_COLORS),
      eyesColor: window.util.getRandomValue(window.colorConsts.EYES_COLORS)
    }
  }

  addWizardsToDom(wizardsList);
  setupSimiliar.classList.remove('hidden');
})();

