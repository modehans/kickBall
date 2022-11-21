'use strict';

const gameScreem = document.querySelector('.js_gameScreen');
const counterHtml = document.querySelector('.js_counter');
let counter = 0;

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const upCounter = () => {
  counter = counter + 1;
  counterHtml.innerText = 'Puntos: ' + counter;
};

const finishAnimation = (ev) => {
  gameScreem.removeChild(ev.target);
};

const removeBall = (ev) => {
  gameScreem.removeChild(ev.target);
};

const handleClickBall = (ev) => {
  upCounter();
  removeBall(ev);
};

const createBall = () => {
  let ball = document.createElement('div');
  ball.className = 'ball';
  ball.style.backgroundColor =
    'rgb(' +
    randomNum(0, 255) +
    ',' +
    randomNum(0, 255) +
    ',' +
    randomNum(0, 255) +
    ')';
  ball.style.top = randomNum(20, 80) + '%';
  ball.style.left = randomNum(10, 90) + '%';
  ball.addEventListener('click', handleClickBall);
  ball.addEventListener('animationend', function (ev) {
    gameScreem.removeChild(ev.target);
  });
  gameScreem.appendChild(ball);
};

const createBallPlus = () => {
  console.log('hola');
  let ballPlus = document.createElement('div');
  ballPlus.className = 'ballPlus';
  ballPlus.style.top = randomNum(20, 80) + '%';
  ballPlus.style.left = randomNum(10, 90) + '%';
  ballPlus.addEventListener('click', handleClickBall);
  ballPlus.addEventListener('animationend', finishAnimation);
  gameScreem.appendChild(ballPlus);
};

setInterval(createBall, 300);
setInterval(createBallPlus, randomNum(3000, 5000));
