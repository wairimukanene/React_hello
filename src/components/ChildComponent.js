import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() =>props.greetHandler('child')}>Greetparent</button>
      
    </div>
  )
}

export default ChildComponent
