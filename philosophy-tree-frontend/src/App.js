import React, { Component } from 'react';
//import CategoryDropdown from './components/CategoryDropdown'
import CategoryContainer from './components/CategoryContainer'
import QuoteContainer from './components/QuoteContainer'
//import QuoteAuthor from './components/QuoteContent'
//import FormParent from './components/FormParent'

class App extends Component {
  
  
  render() {
    return (
      <div className="container" id="app">
          <CategoryContainer/>
        
      </div>
    )
  }
}

export default App;

//<QuoteContainer />
//
//<FormParent />