'use strict';

const gameScreem = document.querySelector('.js_gameScreen');
const counterHtml = document.querySelector('.js_counter');
let counter = 0;

const randomNum = (max) => {
  return Math.ceil(Math.random() * max);
};

const upCounter = () => {
  counter = counter + 1;
  console.log(counter);
  counterHtml.innerText = 'Puntos: ' + counter;
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
    'rgb(' + randomNum(255) + ',' + randomNum(255) + ',' + randomNum(255) + ')';
  ball.style.top = randomNum(80) + 'vh';
  ball.style.left = randomNum(80) + 'vw';
  ball.addEventListener('click', handleClickBall);
  ball.addEventListener('animationend', function (ev) {
    gameScreem.removeChild(ev.target);
  });
  gameScreem.appendChild(ball);
};

setInterval(createBall, 300);
