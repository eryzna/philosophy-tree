import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from './actions/FetchCategories'
import { fetchQuotes } from './actions/FetchQuotes'
//import NavBarTest from './components/Header'
//import CategoryDropdown from './components/CategoryDropdown'
import CategoryContainer from './components/CategoryContainer'
import Header from './components/Header'
//import QuoteContainer from './components/QuoteContainer'
//import CategoryFormParent from './components/CategoryFormParent'
//import FormParent from './components/FormParent'

 

class App extends Component {

  componentDidMount() {
    
    this.props.fetchCategories()
    
    this.props.fetchQuotes()
  }
  
  render() {

    
      return (
        <>
        <Header />
          <div id="home">
          
          <div id="app">
            <CategoryContainer categories={this.props.categories} quotes={this.props.quotes}/>
          </div>
      
        </div>
        </>
      )}
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