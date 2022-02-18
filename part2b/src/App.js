import React, { useState } from 'react'
import Person from './component/Person';


const App = (props) => {
  const [persons, setPerson] = useState(props.persons)
  const [newPerson, setNewPerson] = useState(
    ''
  ) 

const addPerson = (event) => {
  event.preventDefault()
  const personNew = {
    name: newPerson,
    id: persons.length + 1
  }
  setPerson(persons.concat(personNew))
  setNewPerson('')
}

    const handlePersonChange = (event) => {
      console.log(event.target.value)
      setNewPerson(event.target.value)
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

