/* import logo from './logo.svg'; */
import React from 'react';
import { Component } from 'react';
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

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: 'click',
			position: ''
		}
	}

	nextYear = () => {
		console.log('+++');
		this.setState(state => ({
			years: state.years + 1
		}));
	}

	inputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		})
	}

	render() {
		const { name, surname, link } = this.props;
		const { years, position } = this.state;
		return (
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h3>My name is {name},
					surname - {surname},
					age - {years},
					position - {position}
				</h3>
				<a href={link}>my page</a>
				<form>
					<span>Put your position</span>
					<input type="text" onChange={(e) => this.inputChanges(e, 'some color')} />
				</form>
			</div>
		)
	}
}

function App() {
	return (
		<div className="App">
			<Header />
			<Field />
			<Btn />
			<WhoAmI name="Artem" surname="Liskovshchenko" link="https://www.facebook.com/artem.liskovschenko" />
			<WhoAmI name="Yuna" surname="Levchenko" link="https://www.facebook.com/yuna.levchenko" />
		</div>
	);
}

export { Header };
export default App;
