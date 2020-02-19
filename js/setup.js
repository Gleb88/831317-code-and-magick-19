'use strict';


var allNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var allSurname = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг']
var allCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var allEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];
var wizard = {};
var mageList = document.querySelector ('.setup-similar-list');
var template = document.querySelector ('#similar-wizard-template')
                       .content
                       .querySelector('div');


var fragment = document.createDocumentFragment();
for (var i = 0; i < 4 ; i++) {
  fragment.appendChild(template.cloneNode(true));
};

mageList.appendChild(fragment);


var getRandomInRange = function (min, max) {
  return Math.floor(Math.random () * (max - min + 1)) + min;
};

for (var i = 0; i < 4; i++) {
  wizard.name = allNames [getRandomInRange (0, allNames.length-1)] + ' ' + allSurname [getRandomInRange (0, allSurname.length-1)];
  wizard.coatColor = allCoatColors [getRandomInRange (0, allCoatColors.length-1)];
  wizard.eyesColor = allEyesColors [getRandomInRange (0, allEyesColors.length-1)];
  wizards[i] = wizard;

  var mages = document.querySelectorAll ('.setup-similar-item');
  var heroName = mages[i].querySelector ('.setup-similar-label');
  var heroCoatColor = mages[i].querySelector ('.wizard-coat');
  var heroCoatColor = mages[i].querySelector ('.wizard-coat');
  var heroEyeColor = mages[i].querySelector ('.wizard-eyes');

  heroName.textContent = wizards[i].name;
  heroCoatColor.setAttribute ('fill', wizards[i].coatColor);
  heroEyeColor.setAttribute ('fill', wizards[i].eyesColor);
};
var showSetup = document.querySelector ('.setup');
showSetup.classList.remove('hidden');

var showSetupSimilar = document.querySelector ('.setup-similar');
showSetupSimilar.classList.remove('hidden');


