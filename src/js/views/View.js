// import icons from "URL:../../img/icons.svg";

export default class View {
  buttons = document.querySelector('.btns');
  parentElement = document.querySelector('body');
  hexLabel = document.getElementById('hex-label');
  copy = document.querySelector('.fa-copy');

  redLabel = document.getElementById('red-label');
  greenLabel = document.getElementById('green-label');
  blueLabel = document.getElementById('blue-label');
  alphaLabel = document.getElementById('alpha-label');

  r = document.getElementById('redColor');
  g = document.getElementById('greenColor');
  b = document.getElementById('blueColor');
  a = document.getElementById('a');

  displayColorsButton = document.querySelector('.displayContainer');
  colorsContainer = document.querySelector('.colorContainer');

  clear() {
    this.parentElement.innerHTML = '';
  }
}
