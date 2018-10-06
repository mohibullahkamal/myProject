import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';   // we can name anything... there we are following the convension -> naming it 'Person' after the 'Person.js'

class App extends Component {
  state = {   //can Only be used when "Component" is extended
    persons: [
      {name: 'Max', age: 28 },
      {name: 'Manu', age: 29 },
      {name: 'Stephanie', age: 34 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!!');
    //Dont't do this-->  this.state.persons[0].name = 'Maximillian';
    this.setState( {   //takes object as an argument and it will merge whatever we define here with the above "state".. 
      persons: [
        {name: newName, age: 27 },
        {name: 'Manu', age: 29 },
        {name: 'Stephanie', age: 34 }
      ]      
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {   //takes object as an argument and it will merge whatever we define here with the above "state".. 
      persons: [
        {name: 'Max', age: 27 },
        {name: event.target.value, age: 29 },
        {name: 'Stephanie', age: 34 }
      ]      
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}/>
          <Person 
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age} 
            clickABC = {this.switchNameHandler.bind(this, 'Max!!')}
            changed = {this.nameChangedHandler}> My Hobbies: Racing</Person>
          <Person 
            name = {this.state.persons[2].name}
            age = {this.state.persons[2].age}/>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!!</p>

        {/* onClick is JSX syntax... */}
        <button 
          style={style}
          onClick = {this.togglePersonsHandler}> Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now??'));   //This is the JS version of the above JSX
  }
}
export default App;

