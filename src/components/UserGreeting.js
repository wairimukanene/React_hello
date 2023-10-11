import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {

    //logical operators
     return this.state.isLoggedIn && <div>welcome mercy </div>
    //tenary operator
    //  return this.state.isLoggedIn ? (
    // <div>Welcome Mercy</div> ) : (
    // <div>welcome guest</div>
    // )
    //element operators
    // let Message
    // if (this.state.isLoggedIn) {
    //     Message= <h1>Welcome Mercy!</h1>;
    // }else {
    //     Message = <div>welcome guest</div>
    // }
    // return <div>{Message}</div>
    //conditional operators
    // if (this.state.isLoggedIn) {
    //     return(
    //         <div>Welcome mercy</div>
    //     )
    // }else {
    //     return(<div>Welcome guest</div>
    //         )
    // }

    // return (
    //     <div>
    //         <div>
    //     Welcome mercy
    //   </div>
    //   <div>Welcome guest</div>
    //     </div>
      
    // )
  }
}

export default UserGreeting
