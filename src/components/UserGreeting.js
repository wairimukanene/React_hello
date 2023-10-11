import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    let Message
    if (this.state.isLoggedIn) {
        Message= <h1>Welcome Mercy!</h1>;
    }else {
        Message = <div>welcome guest</div>
    }
    return <div>{Message}</div>
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
