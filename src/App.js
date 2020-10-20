import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = () => {

// STATE ===========================================================================
  const [ personsState, setPersonsState ] = useState({
    persons: [
            {name: 'Ethan', age: 6},
            {name: 'Chloe', age: 3},
            {name: 'Kirby', age: 1}
          ]
  });

  const [ otherState, setOtherState ] = useState({
    otherState: 'Some value'
  })
  
  const [ showPersons, setShowpersons ] = useState(false);

//  EVENT HANDLERS =================================================================
  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: 'Sir Ethan!!', age: 6},
        {name: newName, age: 3},
        {name: 'Kirby', age: 1}
      ]
    })
  }

  const nameInputHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Ethan', age: 6},
        {name: 'Chloe', age: 3},
        {name: event.target.value, age: 1}
      ]
    })
  }

  const togglePersonHandler = () => {
    setShowpersons(!showPersons);
  }

// Inline Styling ================================================================= 
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    borderRadius: '20px',
    cursor: 'pointer'
  }
  
// RENDER ==========================================================================
  let personsDiv = null;

  if (showPersons) {
    personsDiv = (
      <div >
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Favorite Food: Pizza</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} inputName={nameInputHandler} />
      </div>
    )
  }

  return (
    <div className="App">
      <h1>This is a React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={togglePersonHandler}>Toggle Persons</button>
      {personsDiv}
    </div>
  ); 
  }

export default App;