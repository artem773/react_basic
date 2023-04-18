import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import WhoAmI from './components/whoAmI/WhoAmI'
import DynamicGreatings from './components/dynamicGreatings/DynamicGreatings';
import BootstrapGrid from './components/bootstrapGrid/BootstrapGrid';
import BootstrapCarousel from './components/bootstrapCarousel/BootstrapCarousel';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Message = (props) => {
  return (
    <h2 style={{ 'color': 'white' }}>The counter is {props.counter}</h2>
  )
}
class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }

  render() {
    return (
      <>
        <Button
          className="btn btn-primary"
          onClick={this.changeCounter}>
          Click me
        </Button>

        {/* <Message counter={this.state.counter} /> */}

        {this.props.render(this.state.counter)}
        {this.props.render(this.state.counter)}
      </>
    )
  }
}

function App() {

  return (
    < div className='App' >

      {/* /////////////////////////////////////////////////////// */}
      <Counter render={counter => (
        < Message counter={counter} />
      )} />

      {/* /////////////////////////////////////////////////////// */}
      <WhoAmI name='John' surname='Wall' link='link.com' />
      <WhoAmI name="Bob" surname="Swan" link="link.com" />

      {/* /////////////////////////////////////////////////////// */}
      <BootstrapGrid
        left={
          <DynamicGreatings>
            <h1>Gooood great day</h1>
            <h1>Shalom dear</h1>
          </DynamicGreatings>
        }
        right={
          <BootstrapCarousel />
        }
      />

    </ div>
  )
}

export default App
