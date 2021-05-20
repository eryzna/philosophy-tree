import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'
import CategoryCard from './CategoryCard.js'

export default class Category extends Component {

    
    render() {
        
      return (
        <>
          {this.props.categories.map((category, id) => 
          <div key={id}>
            <CategoryCard name={category.name} description={category.description} />
            </div>
            
          )}
        </>
      )
    }
  }

  Category.defaultProps = {
      categories: []
    }