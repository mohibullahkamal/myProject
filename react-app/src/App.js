import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';   // we can name anything... there we are following the convension -> naming it 'Person' after the 'Person.js'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28 },
      {name: 'Stephanie', age: 34 },
      {name: 'Manu', age: 29 },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    //console.log('Was clicked!!');
    this.state.persons[0].name = 'Maximillian'
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!!</p>

        {/* onClick is JSX syntax... */}
        <button onClick={this.switchNameHandler}> Switch Name</button> 

        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} /> 
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now??'));   //This is the JS version of the above JSX
  }
}

export default App;





// switchNameHandler = () => {
//   console.log('Was Clicked!');
//   //DON'T DO THIS --> this.state.persons[0].name = 'Max';
//   this.setState( {
//     persona: [
//     {name: 'Max', age: 28 },
//     {name: 'Stephanie', age: 34 },
//     {name: 'Manu', age: 29 }, 
//   ]})
// }


