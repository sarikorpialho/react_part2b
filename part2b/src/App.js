import React, { useState, useEffect } from 'react'
import Person from './component/Person'
import personService from './services/persons.js'


const App = (props) => {
  const [persons, setPerson] = useState([])
  const [newPerson, setNewPerson] = useState('') 
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
        .then(initialPerson => {
        setPerson(initialPerson)
      })
  }, [])
  //console.log('render', persons.length, 'persons')
 

const addPerson = (event) => {
  event.preventDefault()
  console.log('button Clicked',event.target)
  console.log("New name", newPerson)
 
  let checkName = persons.filter(person => (person.name === newPerson))
  if(checkName.length === 0){
    const personNew = {
      name: newPerson,
      number: newNumber
    }
  

    personService
      .create(personNew)
      .then(returnedPerson => {
        setPerson(persons.concat(returnedPerson))
        setNewPerson('')
        setNewNumber('')
      })
    } else if (checkName.length !== 0) {
      alert(`${newPerson} is already added to phonebook`);
    }
   
  }

/*const deleteContactOf = id => {
  const contact = persons.find(n => n.id === id)
  if(contact == true){
    console.log(`importance of ${id} needs to be toggled`)
  }
} */
/*const onDeleteClick = ( id ) => {
 
      let name = persons.find( person => person.id === id ).name
      if( window.confirm( `Poistetaanko ${ name }?` ) ) {
          personService
              .remove( id )
              .then( status => {
      this.setState( {
        persons: persons.filter( person => person.id !== id ),
        notificationMessage: `Poistettiin ${ name }`
      } );
      setTimeout( () => {
        setState( { notificationMessage: null } )
      }, 2500 );
    } );
      }
  
}; */

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
          {persons.map(person => <Person key={person.id} person={person}
           />)}
        </ul>
      </div>
    )
  
}

export default App

