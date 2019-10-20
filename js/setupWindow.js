'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupOpenBtn = document.querySelector('.setup-open');
  var setupCloseBtn = setupWindow.querySelector('.setup-close');
  var setupOpenIcn = document.querySelector('.setup-open-icon');
  var setupWindowHandler = setupWindow.querySelector('.upload');

  window.openSetupWindow = function () {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onSetupWindowEscPress);
  };

  window.closeSetupWindow = function () {
    setupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onSetupWindowEscPress);
  };

  function onSetupWindowEscPress(evt) {
    if (!(evt.target.name === 'username')) {
      window.util.isEscEvent(evt, window.closeSetupWindow);
    }
  }

  // Откроем окно по нажатию на элемент
  setupOpenBtn.addEventListener('click', window.openSetupWindow);

  setupOpenBtn.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, window.openSetupWindow);
  });

  setupOpenIcn.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, window.openSetupWindow);
  });

  // Закроем окно по нажатию на элемент
  setupCloseBtn.addEventListener('click', window.closeSetupWindow);

  setupCloseBtn.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, window.closeSetupWindow);
  });

  // Drag-and-drop по окну настройки персонажа
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
        // eslint-disable-next-line no-inner-declarations
        function onClickPreventDefault() {
          evt.preventDefault();
          setupWindowHandler.removeEventListener('click', onClickPreventDefault);
        }
        setupWindowHandler.addEventListener('click', onClickPreventDefault);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
