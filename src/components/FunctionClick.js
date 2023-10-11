import React from 'react'
//Event handling
function FunctionClick() {
    function clickHandler() {
        console.log('you have clicked me')

    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
