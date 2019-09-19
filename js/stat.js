window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px "PT Mono"';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов:', 120, 70);
  ctx.textBaseline = 'hanging';

  var maxValue = times[0];

  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxValue) {
      maxValue = times[i];
    }
  }

  maxValue = Math.floor(maxValue);

  console.log(maxValue);

}
