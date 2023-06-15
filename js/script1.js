// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener('click', () => {
//   console.log('Вешаю слушателя на целевую кнопку');

//   targetBtn.addEventListener('click', onTargetBtnClick)
// });

// removeListenerBtn.addEventListener('click', ()=>{
//   console.log('Снимаю слушателя с целевой кнопки');

//   targetBtn.removeEventListener('click', onTargetBtnClick)
// });

// function onTargetBtnClick(){
//   console.log('CLICK');
// };



// function logMessage() {
//   console.log('Клик по целевоц кнопке');
// }

// function handleTargetBtnClick(){
//   console.log('CLICK');
// }

// function targetBtnClickHandler(){
//   console.log('CLICK');
// }

// function onTargetBtnClick(){
//   console.log('CLICK');
// }


// ====================================
// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeypress);
// refs.clearBtn.addEventListener('click', onClearOutput);

// function onKeypress(event)  {
//   // console.log('event.key:', event.key);
//   // console.log('event.code:', event.code);

//   refs.output.textContent += event.key;
// }

// function onClearOutput(){
//   refs.output.textContent = '';
// }

// ================
// Открыть ы закрыть по кнопке, закрыть по клику на бекдроп, закрыть по ESC
// В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки

const refs = {
  openModalBtn: document.querySelector('[data-action = "open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal(){
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}
function onCloseModal(){
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}
function onBackdropClick(event){
  // console.log(event.currentTarget);
  // console.log(event.target);

  if(event.currentTarget === event.target){
    console.log('Клик по backdrop');
    onCloseModal();
  }
}

function onEscKeyPress(event){
  console.log(event.code);
  if(event.code === 'Escape'){
    onCloseModal();
  }
}


