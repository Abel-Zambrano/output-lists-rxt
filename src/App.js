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
  
  const [ showPersons, setShowpersons ] = useState(false);

//  EVENT HANDLERS =================================================================
  const togglePersonHandler = () => {
    setShowpersons(!showPersons);
  }

  const deletePersonHandler = (personIndex) => {
    //const persons = personsState.persons.slice();
    const persons = [...personsState.persons] // Copy array before manipulating
    persons.splice(personIndex, 1);
    setPersonsState({persons: persons})

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
        {personsState.persons.map((person, index) => {
          return <Person key={index} click={() => deletePersonHandler(index)} name={person.name} age={person.age} />
        })}
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