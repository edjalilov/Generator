let all = document.querySelector('.all');
let tLeft = document.querySelector('.top-left');
let tRight = document.querySelector('.top-right');
let bLeft = document.querySelector('.bottom-left');
let bRight = document.querySelector('.bottom-right');
let width = document.querySelector('.border-width');
let color = document.querySelector('.border-color');
let style = document.querySelector('.border-style');
let block = document.querySelector('.block');
let text = document.querySelector('textarea');

document.querySelector('.all').oninput = generator;
document.querySelector('.top-left').oninput = topLeft;
document.querySelector('.top-right').oninput = topRight;
document.querySelector('.bottom-left').oninput = bottomLeft;
document.querySelector('.bottom-right').oninput = bottomRight;
document.querySelector('.border-width').oninput = borderWidth;
document.querySelector('.border-color').oninput = borderColor;
document.querySelector('.border-style').oninput = borderStyle;
document.querySelector('.bg-color').oninput = bgColor;
document.querySelector('.reset').onclick = reset;

text.innerHTML = 'border-radius: 0px 0px 0px 0px; \n' +
  '-webkit-border-radius: 0px 0px 0px 0px; \n' +
  '-moz-border-radius: 0px 0px 0px 0px;';

function generator() {
  block.style.borderRadius = this.value + 'px';
  if (width.value > 0) {
    text.innerHTML =
      'border-radius: ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px; \n' +
      '-webkit-border-radius: ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px; \n' +
      '-moz-border-radius: ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px; \n' +
      'border: ' + width.value + 'px ' + style.value + ' ' + color.value + ';';

  } else {
    text.innerHTML =
      'border-radius: ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px; \n' +
      '-webkit-border-radius: ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px; \n' +
      '-moz-border-radius: ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px ' + this.value + 'px;';
  }

  tLeft.value = this.value;
  tRight.value = this.value;
  bLeft.value = this.value;
  bRight.value = this.value;
}

function topLeft() {
  block.style.borderTopLeftRadius = this.value + 'px';
  if (width.value > 0) {
    text.innerHTML =
      'border-radius: ' + this.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px; \n' +
      '-webkit-border-radius: ' + this.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px; \n' +
      '-moz-border-radius: ' + this.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px; \n' +
      'border: ' + width.value + 'px ' + style.value + ' ' + color.value + ';';
  } else {
    text.innerHTML =
      'border-radius: ' + this.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px; \n' +
      '-webkit-border-radius: ' + this.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px; \n' +
      '-moz-border-radius: ' + this.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px;';

  }
}

function topRight() {
  block.style.borderTopRightRadius = this.value + 'px';
  if (width.value > 0) {
    text.innerHTML =
      'border-radius: ' + tLeft.value + 'px ' + this.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px; \n' +
      '-webkit-border-radius: ' + tLeft.value + 'px ' + this.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px; \n' +
      '-moz-border-radius: ' + tLeft.value + 'px ' + this.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px; \n' +
      'border: ' + width.value + 'px ' + style.value + ' ' + color.value + ';';
  } else {
    text.innerHTML =
      'border-radius: ' + tLeft.value + 'px ' + this.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px; \n' +
      '-webkit-border-radius: ' + tLeft.value + 'px ' + this.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px; \n' +
      '-moz-border-radius: ' + tLeft.value + 'px ' + this.value + 'px ' + bLeft.value + 'px ' + bRight.value + 'px;';

  }
}

function bottomLeft() {
  block.style.borderBottomLeftRadius = this.value + 'px';
  if (width.value > 0) {
    text.innerHTML =
      'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + this.value + 'px ' + bRight.value + 'px; \n' +
      '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + this.value + 'px ' + bRight.value + 'px; \n' +
      '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + this.value + 'px ' + bRight.value + 'px; \n' +
      'border: ' + width.value + 'px ' + style.value + ' ' + color.value + ';';
  } else
    text.innerHTML =
    'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + this.value + 'px ' + bRight.value + 'px; \n' +
    '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + this.value + 'px ' + bRight.value + 'px; \n' +
    '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + this.value + 'px ' + bRight.value + 'px;';
}

function bottomRight() {
  block.style.borderBottomRightRadius = this.value + 'px';
  if (width.value > 0) {
    text.innerHTML =
      'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + this.value + 'px; \n' +
      '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + this.value + 'px; \n' +
      '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + this.value + 'px; \n' +
      'border: ' + width.value + 'px ' + style.value + ' ' + color.value + ';';
  } else
    text.innerHTML =
    'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + this.value + 'px; \n' +
    '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + this.value + 'px; \n' +
    '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + this.value + 'px;';

}

function borderWidth() {
  block.style.borderWidth = this.value + 'px';
  if (width.value > 0) {
    text.innerHTML =
      'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
      '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
      '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
      'border: ' + width.value + 'px ' + style.value + ' ' + color.value + ';';
  } else {
    text.innerHTML =
      'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + this.value + 'px; \n' +
      '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + this.value + 'px; \n' +
      '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bLeft.value + 'px ' + this.value + 'px;';
  }

}

function borderColor() {
  block.style.borderColor = this.value;
  text.innerHTML =
    'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
    'border: ' + width.value + 'px ' + style.value + ' ' + this.value + ';';
}

function borderStyle() {
  block.style.borderStyle = this.value;
  text.innerHTML =
    'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
    'border: ' + width.value + 'px ' + this.value + ' ' + color.value + ';';
}

function bgColor() {
  block.style.backgroundColor = this.value;
  'border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-webkit-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
    '-moz-border-radius: ' + tLeft.value + 'px ' + tRight.value + 'px ' + bRight.value + 'px ' + bLeft.value + 'px; \n' +
    'border: ' + width.value + 'px ' + style.value + ' ' + color.value + '; \n';
  'background-color: ' + this.value;
}

function reset() {
  block.style.borderRadius = 0 + 'px';
  block.style.backgroundColor = '#1f9ee7';
  block.style.borderColor = 'none';
  block.style.borderStyle = 'none';
  text.innerHTML =
    'border-radius: ' + 0 + 'px ' + 0 + 'px ' + 0 + 'px ' + 0 + 'px; \n' +
    '-webkit-border-radius: ' + 0 + 'px ' + 0 + 'px ' + 0 + 'px ' + 0 + 'px; \n' +
    '-moz-border-radius: ' + 0 + 'px ' + 0 + 'px ' + 0 + 'px ' + 0 + 'px;';
  document.querySelector('.all').value = 0;
  document.querySelector('.top-left').value = 0;
  document.querySelector('.top-right').value = 0;
  document.querySelector('.bottom-left').value = 0;
  document.querySelector('.bottom-right').value = 0;
  document.querySelector('.border-width').value = 0;
  document.querySelector('.border-color').value = '#000';
  document.querySelector('.border-style').value = 'solid';
  document.querySelector('.bg-color').value = '#000';

}