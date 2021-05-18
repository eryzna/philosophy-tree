import React, { Component } from 'react';
import Quote from './components/Quote.js'
//import ColorBox from './ColorBox.js'

class App extends Component {
  
  // Nothing needs to change here! 
  // Make note of what prop we are initially passing to `ColorBox` below!
  
  render() {
    return (
      <div id="app">
          <Quote />
          
      </div>
    )
  }
}

export default App;