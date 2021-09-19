const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

const body = document.querySelector('body');

const buttonStart = document.querySelector('.js-start');
const buttonStop = document.querySelector('.js-stop');

buttonStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    let colorsIndex = randomIntegerFromInterval(0, colors.length);

    document.body.style.backgroundColor = colors[colorsIndex];
  }, 1000);
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
});
