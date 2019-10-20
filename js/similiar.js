/* eslint-disable no-invalid-this */
'use strict';

(function () {
  var wizards = [];
  var coatColor;
  var eyesColor;
  // Функция-обработчик получения данных о магах с сервера

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  function getRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  function updateWizards() {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  // Функция-обработчик успешной загрузки данных
  function handleSuccessWizardsLoad(data) {
    wizards = data;
    updateWizards();
  }

  window.backend.load(handleSuccessWizardsLoad, window.backend.onErrorFormSubmit);
})();

