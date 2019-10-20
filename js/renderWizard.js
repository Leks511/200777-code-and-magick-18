'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var wizardsList = setupWindow.querySelector('.setup-similar-list');
  var setupSimiliar = setupWindow.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Функция рендеринга мага
  window.renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (data) {
    wizardsList.innerHTML = '';
    var wizardsListFragment = new DocumentFragment();

    var takeNumber = data.length > 4 ? 4 : data.length;
    for (var i = 0; i < takeNumber; i++) {
      wizardsListFragment.appendChild(window.renderWizard(data[i]));
    }
    wizardsList.appendChild(wizardsListFragment);
    setupSimiliar.classList.remove('hidden');
  };
})();
