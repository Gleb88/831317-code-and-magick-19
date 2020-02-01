'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_GAP_X = 100;
var TEXT_GAP_Y = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP_X = 50;
var BAR_GAP_Y = 80;
var CLOUD_GAP = 10;
var names = ['Вы', 'Игрок1', 'Игрок2', 'Игрок3'];
var times = ['2048', '4586', '1093', '3087'];
var barColors = ['rgba(255, 0, 0, 1)', 'hsl(240,100%,50%)', 'hsl(240,10%,50%)', 'hsl(240,40%,50%)'];

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud (ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud (ctx, CLOUD_X, CLOUD_Y, '#fff' );

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText ('Ура вы победили!', CLOUD_X + TEXT_GAP_X, CLOUD_Y + TEXT_GAP_Y );
  ctx.fillText ('Список результатов:', CLOUD_X + TEXT_GAP_X, CLOUD_Y + 2 * TEXT_GAP_Y );


  for (var i = 0; i < names.length; i++) {
    var barIHeight = (BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(times[i], CLOUD_X + (i + 1) * BAR_WIDTH + i * BAR_GAP_X, CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT - barIHeight - TEXT_GAP_Y);
    ctx.fillText(names[i], CLOUD_X + (i + 1) * BAR_WIDTH + i * BAR_GAP_X, CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT + TEXT_GAP_Y);
    ctx.fillStyle = barColors[i];
    ctx.fillRect(CLOUD_X + (i + 1) * BAR_WIDTH + i * BAR_GAP_X, CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT - barIHeight, BAR_WIDTH, barIHeight);
  };
};
