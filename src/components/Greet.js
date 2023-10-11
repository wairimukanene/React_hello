import React from 'react'

// function Greet(){
//     return <h1>Hello wairimukanene</h1> // JSX - JavaScript XML
// }

//destructing props
//const Greet = (name,heroName) => {
const Greet = props => {
    const {name,heroName} = props
return <div>
    {/* //{props.children} */}
    <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
}

export default Greet
