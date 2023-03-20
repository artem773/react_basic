/* import logo from './logo.svg'; */
import React from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello artem</h2>
}

const Field = () => {
  const holder = ['Enter here..', 'Log in here..'];
  const logged = true;
  const styledField = {
    width: '300px',
    fontSize: '15px',
    border: '2px solid #ffe837',
    borderRadius: '4px',
  };

  return <input
    type="text"
    style={styledField}
    placeholder={logged ? holder[0] : holder[1]} />
}

// class Field extends React.Component{ //создаєм  такой же компонент Field с помощью класса 
//   render(){
//     const holder = ['Enter here..', 'Log in here..'];
//     const logged = true;
//     const styledField = {
//       width: '300px',
//       fontSize: '15px',
//       border: '2px solid #ffe837',
//       borderRadius: '4px',
//     };

//     return <input 
//     type="text" 
//     style={styledField} 
//     placeholder={logged ? holder[0] : holder[1]} />
//   }
// }

const Btn = () => {
  const text = 'Log in.';
  const logged = true;

  return <button>{logged ? 'Enter' : text}</button>
}

const WhoAmI = ({name, surname, link}) => {
  return(
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href="{link}">my page</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
      <WhoAmI name = {() => {return "Artem"}} surname = "Liskovshchenko" link = "https://www.facebook.com/artem.liskovschenko"/>
      <WhoAmI name = {() => {return "Yuna"}} surname = "Levchenko" link = "https://www.facebook.com/yuna.levchenko"/>
    </div>
  );
}

export { Header };
export default App;
