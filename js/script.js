

// const elem = document.querySelector('.js-elem');
// console.dir(elem);
// console.log(itemsEl);

// const refs = {
//   staticItems:document.querySelectorAll('.js-item'),
//   dynamicItems:document.getElementsByClassName('js-item'),
//   ul:document.querySelector('.js-list'),
// }
// OLD SCHOOL
// const arr = [];
// for(let i = 0; i < 3; i += 1){
//   const li = document.createElement('li');
//   li.classList.add('js-item');
//   li.textContent = Number(refs.ul.lastElementChild.textContent) + i+1;
//   arr.push(li);
// }
// refs.ul.append(...arr);

// console.log('staticItems' ,refs.staticItems);
// console.log('dynamicItems' ,refs.dynamicItems);

// const arr = [];

// for(let i = 1; i <= 3;i += 1){
//   const markup = `<li class="js-item">${Number(refs.ul.lastElementChild.textContent) + i}</li>`;
//   arr.push(markup);
// }
// refs.ul.insertAdjacentHTML('beforeend', arr.join(''))
// console.log(arr);

// const refs = {
//   text : document.querySelector('h1'),
//   input : document.querySelector('input')
// }

// console.dir(refs.input);
// console.log(refs.text.textContent);
// refs.input.value = refs.text.textContent;
// console.dir(refs.text.dataset.id);
// console.log(refs.text.getAttribute('data-id'));
// console.log(refs.text.getAttribute('id'));

const cars = [
  {
  id: 1,  
  car: 'Honda',
  type: 'Civic',
  price: 12000,
  img: '#'
},
{
  id: 2,
  car: 'Audi',
  type: 'Q7',
  price: 40000,
  img: '#'
},
{
  id: 3,
  car: 'Honda',
  type: 'Accord',
  price: 20000,
  img: '#'
},
{
  id: 4,
  car: 'BMW',
  type: '5 siries',
  price: 9000,
  img: '#'
},
{
  id: 5,
  car: 'Volvo',
  type: 'XC60',
  price: 7000,
  img: '#'
},
]

const listRef = document.querySelector('.js-list');
// метод MAP
// const markup = cars.map(({id,car,type,price,img}) => 
//   `<li data-id=${id} >
//   <img src="${img}" alt="${type}" width=300px">
//   <h2>Марка:${car} </h2>
//   <h2>Модель: ${type}</h2>
//   <p>Ціна: ${price}</p>
//   </li>`
// ).join('');

// метод Reduce
 const markup = cars.reduce((acc,{id,car,type,price,img}) => 
  acc + `<li data-id=${id} >
  <img src="${img}" alt="${type}" width=300px">
  <h2>Марка:${car} </h2>
  <h2>Модель: ${type}</h2>
  <p>Ціна: ${price}</p>
  </li>`, ''
)


listRef.style.listStyle = 'none';
listRef.style.display = 'flex';
listRef.style.flexWrap = 'wrap';
listRef.style.justifyContent = 'space-between';



// console.log(markup);
listRef.insertAdjacentHTML('beforeend', markup);

const items = document.querySelectorAll('li');
items.forEach(item => item.style.width = '300px')
console.log(items);



