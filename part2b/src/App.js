import React, { useState } from 'react'
import Person from './component/Person'
import axios from 'axios'


const App = (props) => {
  const [persons, setPerson] = useState(props.persons)
  const [newPerson, setNewPerson] = useState('') 
  const [newNumber, setNewNumber] = useState('')

const addPerson = (event) => {
  event.preventDefault()
  console.log('button Clicked',event.target)
  console.log("New name", newPerson)
 
  let checkName = persons.filter(person => (person.name === newPerson))
  if(checkName.length === 0){
    const personNew = {
      name: newPerson,
      number: newNumber,
      id: persons.length + 1
    }
    setPerson(persons.concat(personNew))
  } else if (checkName.length !== 0) {
    alert(`${newPerson} is already added to phonebook`);
  }
  setNewPerson('')
  setNewNumber('')
}

const handlePersonChange = (event) => {
  console.log(event.target.value)
  setNewPerson(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    }
  
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={addPerson}>
          <div>
            nimi:
        <input
          value={newPerson}
          onChange={handlePersonChange}
        />
        </div>
        <div>
            numero:
        <input
          value={newNumber}
          onChange={handleNumberChange}
        />
        </div>
        <div>
        <button type="submit">lisää</button>
        </div>
      </form> 
        <h2>Numerot</h2>
        <ul>
          {persons.map(person => <Person key={person.id} person={person} />)}
        </ul>
      </div>
    )
  
}

export default App

