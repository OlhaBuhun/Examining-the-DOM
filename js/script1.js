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

// const refs = {
//   openModalBtn: document.querySelector('[data-action = "open-modal"]'),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// };

// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.backdrop.addEventListener('click', onBackdropClick);

// function onOpenModal(){
//   window.addEventListener('keydown', onEscKeyPress);
//   document.body.classList.add('show-modal');
// }
// function onCloseModal(){
//   window.removeEventListener('keydown', onEscKeyPress);
//   document.body.classList.remove('show-modal');
// }
// function onBackdropClick(event){
//   // console.log(event.currentTarget);
//   // console.log(event.target);

//   if(event.currentTarget === event.target){
//     console.log('Клик по backdrop');
//     onCloseModal();
//   }
// }

// function onEscKeyPress(event){
//   console.log(event.code);
//   if(event.code === 'Escape'){
//     onCloseModal();
//   }
// }

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");


// parent.addEventListener("click", (event) => {
//   console.log("Parent click handler");
//   console.log(event.target);
//   console.log(event.currentTarget);
// });

// child.addEventListener("click", (event) => {
//  console.log("Child click handler");
//  console.log(event.target);
//   console.log(event.currentTarget);
// });

// descendant.addEventListener("click", (event) => {
//   console.log("Descendant click handler");
//   console.log(event.target);
//   console.log(event.currentTarget);
// });

// ========
const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(event){
  // console.log(event.target.nodeName);
  // console.log(event.currentTarget);

  if(event.target.nodeName !== 'BUTTON'){
    return;
  }
  console.log(event.target.textContent);

}


const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtn);

function onAddBtn(){
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;

}
