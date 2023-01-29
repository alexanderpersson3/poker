import View from './View.js';

class RgbColors extends View {
  constructor(r, g, b) {
    super();
    //  this.r = r;
    //  this.g = g;
    //  this.b = b;
    this.addHandlers();
  }

  backgroundColor(randomColor) {
    this.parentElement.style.background = randomColor;
  }
  rgb() {
    this.r.value = Math.floor(Math.random() * 256);
    this.g.value = Math.floor(Math.random() * 256);
    this.b.value = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${this.r.value},${this.g.value},${this.b.value})`;

    // set the background color to the random generated RGB
    this.backgroundColor(randomColor);
    this.generateMarkup(randomColor);
  }
  colorToHex(color) {
    const hexDecimal = color.toString(16);
    return hexDecimal.length === 1 ? '0' + hexDecimal : hexDecimal;
  }
  convertRgbToHex() {
    const r = +document.querySelector('#redColor').value;
    const g = +document.querySelector('#greenColor').value;
    const b = +document.querySelector('#blueColor').value;

    const generateHex =
      '#' + this.colorToHex(r) + this.colorToHex(g) + this.colorToHex(b);

    this.backgroundColor(generateHex);
    this.generateMarkup(generateHex);
  }

  rgba(a) {
    this.r.value = Math.floor(Math.random() * 256);
    this.g.value = Math.floor(Math.random() * 256);
    this.b.value = Math.floor(Math.random() * 256);

    const randomColor = `rgba(${this.r.value},${this.g.value},${
      this.b.value
    },${+Math.random(a).toFixed(2)})`;

    // set the background color to the random generated RGB
    this.backgroundColor(randomColor);
    this.generateMarkup(randomColor);
  }

  generateColorHandler(handler) {
    this.buttons.addEventListener('click', (e) => {
      // for random color
      const randomColor = e.target.closest('.btn-randomColor');
      if (randomColor) {
        this.rgb();
        this.setLabelTextContent();
      }
      // for rgba
      const rgbaColor = e.target.closest('.btn-rgba');
      if (rgbaColor) {
        this.rgba();
        this.setLabelTextContent();
      }
      // for hexColor
      const hexConverter = e.target.closest('.btn-hexConvert');
      if (hexConverter) {
        this.convertRgbToHex();
        this.setLabelTextContent();
      }

      handler();
    });
  }
  setLabelTextContent() {
    this.redLabel.textContent = this.r.value;
    this.greenLabel.textContent = this.g.value;
    this.blueLabel.textContent = this.b.value;
  }
  generateMarkup(color) {
    const markup = `<h1 id="hex-label">
    ${color}
    </h1><span><i class="fa-regular fa-copy"></i></span> `;
    this.hexLabel.innerHTML = markup;
  }

  copyToClipboardHandler(handler) {
    this.hexLabel.addEventListener('click', function (e) {
      const copy = e.target.closest('.fa-copy');

      if (!copy) return;
      handler(document.querySelector('#hex-label').textContent);
      setTimeout(() => {
        document.querySelector('#hex-label').innerHTML = `<p>Copied!</p>`;
      }, 300);
    });
  }
  btnTextClose() {
    if (this.colorsContainer.classList.contains('hidden'))
      this.displayColorsButton.textContent = 'Colors';
    else this.displayColorsButton.textContent = 'Close';
  }

  toggleColors() {
    this.colorsContainer.classList.toggle('hidden');
    this.btnTextClose();
  }
  addHandlers() {
    this.displayColorsButton.addEventListener(
      'click',
      this.toggleColors.bind(this)
    );
  }
}
export default new RgbColors();
