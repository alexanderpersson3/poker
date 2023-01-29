export const background = {
  color: '',
};
let color;
export const saveColorLocally = function () {
  color = document.body.style.background;
  if (background.color) background.color = '';
  background.color = color;
  localStorage.setItem('backgroundColor', JSON.stringify(background.color));
};
const init = function () {
  const storage = localStorage.getItem('backgroundColor');
  if (storage) background.color = JSON.parse(storage);
  document.body.style.background = background.color;
};
init();
