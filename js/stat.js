'use strict';

(function() {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';

  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;

  var YOURSELF_BAR_COLOR = 'rgba(255, 0, 0, 1)';
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;
  var BAR_Y = 100;

  var TEXT_HEIGHT = 20;
  var FONT = '16px "PT Mono"';

  var FIRST_COLOR = 'rgba(0, 0, 0, 0.7)';

  var CONGRATULATIONS = 'Ура вы победили!';
  var INTRO_WORD = 'Список результатов:';

  var TOP_X_GAP = 120;
  var TOP_TEXT_Y = 30;

  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
  }

  function renderText(ctx, text, x, y) {
    ctx.fillStyle = FIRST_COLOR;
    ctx.font = FONT;
    ctx.fillText(text, x, y);
    ctx.textBaseline = 'hanging';
  }

  function getSaturation() {
    return Math.random().toFixed(2) * 100 + '%';
  }

  function getMaxElement(arr) {
    var maxValue = arr[0];

    if (arr.length === 1) {
      return Math.floor(maxValue);
    }

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
    return Math.floor(maxValue);
  }

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, FIRST_COLOR);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

    renderText(ctx, CONGRATULATIONS, TOP_X_GAP, TOP_TEXT_Y);
    renderText(ctx, INTRO_WORD, TOP_X_GAP, TOP_TEXT_Y + TEXT_HEIGHT);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var playerName = names[i];
      var playerRes = Math.floor(times[i]);

      var barHeight = BAR_HEIGHT * (times[i]) / maxTime;
      var barY = BAR_HEIGHT - barHeight + BAR_Y;

      renderText(ctx, playerName, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + BAR_HEIGHT + BAR_Y);
      renderText(ctx, playerRes, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, barY - TEXT_HEIGHT);

      var saturationValue = getSaturation();

      ctx.fillStyle = 'hsl(240, ' + saturationValue + ', 50%)'

      if (playerName === 'Вы') {
        ctx.fillStyle = YOURSELF_BAR_COLOR;
      }

      ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, barY, BAR_WIDTH, barHeight);
    }
  }
})();
