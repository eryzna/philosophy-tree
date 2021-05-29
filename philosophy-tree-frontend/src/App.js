import React, { Component } from 'react';
//import NavBarTest from './components/Header'

//import CategoryDropdown from './components/CategoryDropdown'
import CategoryContainer from './components/CategoryContainer'
import Header from './components/Header'
//import QuoteContainer from './components/QuoteContainer'
import QuoteFormParent from './components/QuoteFormParent'
//import FormParent from './components/FormParent'

class App extends Component {

  state = {
    clicked: 'false'
  }
  
  handleClick = () => {
    console.log('clicked')
    this.setState( {
      clicked: 'true'
    })
  }

  componentDidUpdate(){
    console.log(this.state.clicked)
  }
  
  render() {

    if (this.state.clicked === 'true') {
      return (
        <>
        <Header handleClick={this.handleClick} />
        <QuoteFormParent />
        </>
      )
    } else {
      return (
        <>
        <Header handleClick={this.handleClick} />
        
      
          <div id="home">
          
          <div className="carousel-inner" id="app">
            <CategoryContainer/>
          </div>
         
        </div>
        </>
      )}
  }
}

export default App;

//<QuoteContainer />
//
//<FormParent />