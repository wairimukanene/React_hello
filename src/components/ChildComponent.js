import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>Greetparent</button>
      
    </div>
  )
}

export default ChildComponent
