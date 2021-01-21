import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '044-1231244' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newPhone
    }
    if(persons.some(e => e.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObject))
    } 
    setNewName('')
    setNewPhone('')
  }

  const nameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const phoneInputChange = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>Name: 
          <input 
          value={newName} 
          onChange={nameInputChange} />
        </div>
        <div>Number: <input 
          value={newPhone}
          onChange={phoneInputChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <ul key={person.name}> {person.name} {person.number} </ul>)}
    </div>
  )
}

export default App