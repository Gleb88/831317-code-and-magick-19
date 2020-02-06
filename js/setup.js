'use strict';

var showSetup = document.querySelector ('.setup');
showSetup.classList.remove('hidden');

var allNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var allSurname = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг']
var allCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var allEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomInRange = function (min, max) {
  return Math.floor(Math.random () * (max - min + 1)) + min;
}

var mageList = document.querySelector ('.setup-similar-list');
var template = document.querySelector ('#similar-wizard-template').content.querySelector('div');

mageList.appendChild(template);

for (var i = 0; i < 4; i++) {
  var mage = document.querySelector ('.setup-similar-item');
  mageList.appendChild(mage.cloneNode(true));
};

var mages = document.querySelectorAll ('.setup-similar-item');

for (var i = 0; i < 5; i++) {
  var name = allNames [getRandomInRange (0, allNames.length-1)] + ' ' + allSurname [getRandomInRange (0, allSurname.length-1)];
  var coatColor = allCoatColors [getRandomInRange (0, allCoatColors.length-1)];
  var eyesColor = allEyesColors [getRandomInRange (0, allEyesColors.length-1)];
  var eachMage = [name, coatColor,eyesColor];

  var heroName = mages[i].querySelector ('.setup-similar-label');
  var heroCoatColor = mages[i].querySelector ('.wizard-coat');
  var heroCoatColor = mages[i].querySelector ('.wizard-coat');
  var heroEyeColor = mages[i].querySelector ('.wizard-eyes');

  heroName.textContent = eachMage[0];
  heroCoatColor.setAttribute ('fill', eachMage[1]);
  heroEyeColor.setAttribute ('fill', eachMage[2]);
};

var showSetupSimilar = document.querySelector ('.setup-similar');
showSetupSimilar.classList.remove('hidden');

console.log (heroCoatColor);

