import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'
//import QuoteCard from './QuoteCard.js'

export default class CategoryCard extends Component {

    render() {
        
      return (
        <div className = "container__content">
            <h1>{this.props.name}</h1>
            <h3>{this.props.description}</h3>

          
        </div>
      )
    }
  }

  CategoryCard.defaultProps = {
      name: "",
      description: ""
    }