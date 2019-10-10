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

  function onSuccessWizardsLoad(wizards) {
    var wizardsListFragment = new DocumentFragment();

    for (var i = 0; i < QUANTITY_OF_WIZARDS; i++) {
      wizardsListFragment.appendChild(renderWizard(wizards[i]));
    }

    wizardsList.appendChild(wizardsListFragment);

    setupSimiliar.classList.remove('hidden');
  }

  function onErrorWizardsLoad(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; width:300px; height:auto; margin-left: -150px; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = '50%';
    node.style.top = '300px';
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.backend.load(onSuccessWizardsLoad, onErrorWizardsLoad);
})();

