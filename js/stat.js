'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;

var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var BAR_Y = 100;

var TEXT_HEIGHT = 20;
var TEXT_GAP = BAR_GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
}

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.font = '16px "PT Mono"';
  ctx.fillText(text, x, y);
  ctx.textBaseline = 'hanging';
}

var getSaturation = function() {
  return Math.random().toFixed(2) * 100 + '%';
}

var getMaxElement = function(arr) {
  if (!(arr.length)) {
    return false;
  }

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


window.renderStatistics = function(ctx, names, times) {

  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255, 255, 255, 1)');

  renderText(ctx, 'Ура вы победили!', 120, 40);
  renderText(ctx, 'Список результатов:', 120, 45);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var playerIndex = i;
    var playerName = names[i];
    var playerRes = Math.floor(times[i]);

    var barHeight = BAR_HEIGHT * (times[i]) / maxTime;
    var barY = BAR_HEIGHT - barHeight + BAR_Y;

    renderText(ctx, playerName, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_Y + BAR_HEIGHT + BAR_Y);
    renderText(ctx, playerRes, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, barY - TEXT_HEIGHT);

    var saturationValue = getSaturation();

    ctx.fillStyle = 'hsl(240, ' + saturationValue + ', 50%)'

    if (playerName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, barY, BAR_WIDTH, barHeight);
  }
}
