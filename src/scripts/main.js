'use strict';

const registerButton = document.querySelector('.register-button');
const registerBlock = document.querySelector('.register-block');
const mainInfo = document.querySelector('.main-info');
const header = document.querySelector('.header');

registerButton.addEventListener('click', () => {
  registerBlock.classList.remove('register-block--is-hidden');
  mainInfo.classList.add('main-info--is-hidden');
  header.classList.add('header--is-hidden');
});

const closeFormIcon = document.querySelector('.selector-form__close-form');

closeFormIcon.addEventListener('click', () => {
  registerBlock.classList.add('register-block--is-hidden');
  mainInfo.classList.remove('main-info--is-hidden');
  header.classList.remove('header--is-hidden');
});

const nextButton = document.querySelector('.button__next-button');
const selectorFormFirst = document.querySelector('.selector-form--first');
const selectorFormSecond = document.querySelector('.selector-form--second');

nextButton.addEventListener('click', () => {
  selectorFormFirst.classList.add('selector-form--is-hidden');
  selectorFormSecond.classList.remove('selector-form--is-hidden');
});
