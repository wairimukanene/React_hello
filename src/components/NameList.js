import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        { 
            id:2,
            name:'mercy',
            age:30,
            skill:'React'
        },
        {
            
            id:3,
            name:'ian',
            age:30,
            skill:'React'
        },
        {
            
            id:4,
            name:'elvis',
            age:30,
            skill:'React'
        }
    ]

    const personList = persons.map(person => <Person key={person.id} person={person} />)

  return (
    <div>
        {
       personList
        }
      
    </div>
  )
}

export default NameList
