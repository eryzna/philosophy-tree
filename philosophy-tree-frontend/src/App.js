import React, { Component } from 'react';
import QuoteContainer from './components/QuoteContainer'
//import Quote from './components/Quote'
//import QuoteAuthor from './components/QuoteContent'
//import Test from './components/Test'

class App extends Component {
  
  
  render() {
    return (
      <div className="container" id="app">
        
          <QuoteContainer />
  
      </div>
    )
  }
}

export default App;