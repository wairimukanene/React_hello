import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome visitor, feel at home',
    };
  }

  // Define the changeMessage method correctly
  changeMessage = () => {
    this.setState({
      message: 'Welcome back, you are now a member',
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
