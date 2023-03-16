import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'hello artem';
const elem = (
  <div>
    <h2 className='text'>Grettings: {text}</h2>
    <input type="text"/>
    <label htmlFor=""></label>
    <button tabIndex="0">click</button>
  </div>
);  

//==============================================================
//const elem = <h2>hello</h2>; // то же самое что і внізу
// const elem = React.createElement('h2', {className: 'first-elem'}, 'Hello'); //передаем 3 аргумента (1.тіп елемента, 2.названіе класа, 3.содержімое)

// const elem = { // обьект которий возвращается с метода више
//   type: 'h2',
//   props: {
//     className: 'first-elem',
//     children: 'Hello'
//   }
// }
//==============================================================

const root = ReactDOM.createRoot(document.getElementById('root')); // во что ми помещаем рендер со страніци 
root.render( //что ми рендерим на страніце 
  elem
);
