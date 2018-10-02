import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';   // we can name anything... there we are following the convension -> naming it 'Person' after the 'Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!!</p>
        <Person />   {/*this is from Person.js*/} 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now??'));   //This is the JS version of the above JSX
  }
}

export default App;


