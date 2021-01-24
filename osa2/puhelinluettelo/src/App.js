import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [ filteredPersons, setFilteredPersons] = useState([]) 
  const [ tempPerson, setTempPerson ] = useState({name: '', number: ''});

  const addName = (event) => {
    event.preventDefault()
    if(persons.some(e => e.name === tempPerson.name)){
      window.alert(`${tempPerson.name} is already added to phonebook`)
    } else {
      if(tempPerson.name && tempPerson.number) {
        persons.push(tempPerson)
      }
    } 
    setTempPerson({name: '', number: ''})
  }

  const nameInputChange = (event) => {
    const newPerson = {...tempPerson, ...{ name: event.target.value }}
    setTempPerson(newPerson)
  }

  const phoneInputChange = (event) => {
    const newPerson = {...tempPerson, ...{ number: event.target.value }}
    setTempPerson(newPerson)
  }

  const filterNameChange = (event) => {
    setFilteredPersons([]);
    const filtered = [];
    persons.forEach(person => {
      if((person.name.toLowerCase().includes(event.target.value.toLowerCase()))){
        filtered.push(person);
      }
    });    
    setFilteredPersons(filtered)
  }

  return (
    <div>
      <div>filter shown with: 
        <input 
          onChange={filterNameChange} 
        />
      </div>
      <h2>Phonebook</h2>
      <h2>Add new</h2>
      <form onSubmit={addName}>
        <div>Name: 
          <input 
            value={tempPerson.name} 
            onChange={nameInputChange} 
          />
        </div>
        <div>Number: 
          <input 
            value={tempPerson.number}
            onChange={phoneInputChange} 
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>All persons</h2>
      {persons.map((person, i) => {
        return (
          <ul key={`all-${i}`}> {person.name} {person.number} </ul> 
        )
      })}
      <h2>Filtered persons</h2>
      {filteredPersons.map((person, i) => {
        return (
          <ul key={`filtered-${i}`}> {person.name} {person.number} </ul> 
        )
      })}
    </div>
  )
}

export default App