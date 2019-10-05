'use strict';

(function() {
  var setupWindow = document.querySelector('.setup');
  var setupOpenBtn = document.querySelector('.setup-open');
  var setupCloseBtn = setupWindow.querySelector('.setup-close');
  var setupOpenIcn = document.querySelector('.setup-open-icon');
  var setupWindowHandler = setupWindow.querySelector('.upload');

  function onSetupWindowEscPress(evt) {
    if (!(evt.target.name === 'username')) {
      window.util.isEscEvent(evt, closeSetupWindow);
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

  setupOpenBtn.addEventListener('click', function () {
    openSetupWindow();
  });

  setupCloseBtn.addEventListener('click', function () {
    closeSetupWindow();
  });

  setupOpenIcn.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openSetupWindow();
    }
  });

  setupCloseBtn.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSetupWindow();
    }
  });



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

})();
