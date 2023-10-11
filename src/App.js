import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

// function App() {
//   return (
//     <div className="App">
//       <Greet/>
//      
//       <Hello/>

      
//     </div>
//   );
// }
class App extends Component {
  render() {
    return(
      <div className="App">
        {
          <EventBind/>
          //<FunctionClick />
          // <ClassClick/>
          // <Message/>
          // <Counter></Counter>
          //<Welcome name="Elvis" heroName="avengers"/>
          
        /* <Greet name="Mercy" heroName="Spiderman"><p>this is children props</p></Greet>
        <Greet name="Ian" heroName="Batman"/><button>Action</button>
        <Welcome name="Mercy" heroName="Spiderman"></Welcome>
        <Welcome name="Ian" heroName="Batman"/>
         */}
       
      </div>
      
    );
  }
  
}

export default App;
