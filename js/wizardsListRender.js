'use strict';

(function () {
  var QUANTITY_OF_WIZARDS = 4;
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupWindow = document.querySelector('.setup');
  var wizardsList = setupWindow.querySelector('.setup-similar-list');
  var setupSimiliar = setupWindow.querySelector('.setup-similar');

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  function handleSuccessWizardsLoad(wizards) {
    var wizardsListFragment = new DocumentFragment();

    for (var i = 0; i < QUANTITY_OF_WIZARDS; i++) {
      wizardsListFragment.appendChild(renderWizard(wizards[i]));
    }

    wizardsList.appendChild(wizardsListFragment);

    setupSimiliar.classList.remove('hidden');
  }

  window.backend.load(handleSuccessWizardsLoad, window.backend.onErrorFormSubmit);
})();

