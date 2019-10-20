'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,

    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomIndex: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomValue: function (arr) {
      return arr[this.getRandomIndex(0, arr.length - 1)];
    }
  };
})();
