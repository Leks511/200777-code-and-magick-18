'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var TEXT_COLOR = 'rgba(0, 0, 0, 0.7)';

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
}

var renderText = function (ctx, font, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
  ctx.textBaseline = 'hanging';
}


window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, 'rgba(255, 255, 255, 1)');

  renderText(ctx, '16px "PT Mono"', 'Ура вы победили!', 120, 50, TEXT_COLOR);
  renderText(ctx, '16px "PT Mono"', 'Список результатов:', 120, 65, TEXT_COLOR);

  var maxValue = times[0];

  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxValue) {
      maxValue = times[i];
    }
  }

  maxValue = Math.floor(maxValue);

}
