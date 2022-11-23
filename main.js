'use strict';

const gameScreem = document.querySelector('.js_gameScreen');
const counterHtml = document.querySelector('.js_counter');
let counter = 0;

const randomNum = (min, max) => {
  return ~~(Math.random() * (max + 1 - min)) + min;
};

const upCounter = (ev) => {
  if (ev.target.className.includes('ballPlus')) {
    counter = counter + 3;
  } else if (ev.target.className.includes('ballBlack')) {
    counter = counter - 2;
  } else {
    counter = counter + 1;
  }
  counterHtml.innerText = 'Puntos: ' + counter;
};

const removeBall = (ev) => {
  gameScreem.removeChild(ev.target);
};

const handleClickBall = (ev) => {
  upCounter(ev);
  removeBall(ev);
};

const createBall = () => {
  let ball = document.createElement('div');
  ball.style.top = randomNum(20, 80) + '%';
  ball.style.left = randomNum(10, 90) + '%';
  ball.addEventListener('click', handleClickBall);
  ball.addEventListener('animationend', removeBall);
  return ball;
};
const createStandarBall = () => {
  let ball = createBall();
  ball.className = 'ball';
  ball.style.backgroundColor =
    'rgb(' +
    randomNum(0, 255) +
    ',' +
    randomNum(0, 255) +
    ',' +
    randomNum(0, 255) +
    ')';
  gameScreem.appendChild(ball);
};

const createPlusBall = () => {
  let ballPlus = createBall();
  ballPlus.className = 'ball ballPlus';
  gameScreem.appendChild(ballPlus);
};

const createBlackBall = () => {
  let ball = createBall();
  ball.className = 'ball ballBlack';
  gameScreem.appendChild(ball);
};

setInterval(createStandarBall, 300);
setInterval(createBlackBall, 500);
setInterval(createPlusBall, randomNum(700, 1400));
