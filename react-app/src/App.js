import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';   // we can name anything... there we are following the convension -> naming it 'Person' after the 'Person.js'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28 },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!!</p>
        <Person name = "Ron" age = "27" />   {/*this is from Person.js*/} 
        <Person name = "Sheldon" age = "44" /> 
        <Person name = "Hermoyni" age = "32">My Hobby is coding</Person> 
        <Person name = "Elizabeth" age = "34" />  
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now??'));   //This is the JS version of the above JSX
  }
}

export default App;

