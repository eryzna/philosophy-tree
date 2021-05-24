import React, { Component } from 'react';
import QuoteContainer from './QuoteContainer.js'
//import Category from './Category.js'

export default class CategoryDropdown extends Component {
    

    render() {
        
      return (
          <div>
              <h3>Select Movement</h3>
            <select name ="name" className = "" onChange={this.props.onChangeName}>
                <option>All</option>
                {this.props.categories.map((category, id) => 
                <option id={category.id} key={id}>{category.name}</option> )}
            </select>
            <button onClick={this.props.handleClick}//{this.props.onSubmit}
            className="">
            Filter
          </button>
         </div>

    
         
         
        
      )
    }
  }

  CategoryDropdown.defaultProps = {
    categories: []
  }

 