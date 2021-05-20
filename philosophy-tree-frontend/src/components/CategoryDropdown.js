import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'
//import QuoteCard from './QuoteCard.js'

export default class CategoryDropdown extends Component {

    render() {
        
      return (
        <select className = "">
            {this.props.categories.map((category, id) => 
            
            <option key={id}>{category.name}</option> )}
        </select>
        
      )
    }
  }

  CategoryDropdown.defaultProps = {
    categories: []
  }