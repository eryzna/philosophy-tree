import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from './actions/FetchCategories'
import { fetchQuotes } from './actions/FetchQuotes'
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

  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchQuotes()
  }
  
  handleClick = () => {
    console.log('clicked')
    this.setState( {
      clicked: 'true'
    })
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
          
          <div id="app">
            <CategoryContainer categories={this.props.categories} quotes={this.props.quotes}/>
          </div>
         
        </div>
        </>
      )}
      }
    }

  function mapDispatchToProps(dispatch){
    return { fetchCategories: () => dispatch(fetchCategories()), fetchQuotes: () => dispatch(fetchQuotes()) }
  }
 
  function mapStateToProps(state){
    return {categories: state.categories, quotes: state.quotes}
  }

  


export default connect(mapStateToProps, mapDispatchToProps)(App)

//<QuoteContainer />
//
//<FormParent />