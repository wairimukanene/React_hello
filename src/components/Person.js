import React from 'react'


function Person({person}) {
  return (
    <div>
      <h2>Iam {person.name}.Iam {person.age} years old.i know {person.skill}</h2>
    </div>
  )
}

export default Person
