import React from 'react'

function NameList() {
    const persons = [
        { 
            id:1,
            name:'mercy',
            age:30,
            skill:'React'
        },
        {
            
            id:1,
            name:'ian',
            age:30,
            skill:'React'
        },
        {
            
            id:1,
            name:'elvis',
            age:30,
            skill:'React'
        }
    ]

    const personList = persons.map(person => <h2>Iam {person.name}.Iam{person.age}years old. i know {person.skill}</h2>)

  return (
    <div>
        {
       personList
        }
      
    </div>
  )
}

export default NameList
