import React, { Component } from 'react';
import QuoteContainer from './QuoteContainer.js'
//import Category from './Category.js'

export default class CategoryDropdown extends Component {

    state = {
        category: 'All',
    }

    handleClick = () => {
        console.log("clicked")
        console.log(this.state)

    }

    onChangeName = ({ target: { value } }) => {
        console.log({target: {value} })
        this.setState({ 
            category: {target: {value} }, 
            
        });
    };


    render() {
        
      return (
          <div>
              <h3>Select Movement</h3>
            <select name ="name" className = "" onChange={this.onChangeName}>
                <option>All</option>
                {this.props.categories.map((category, id) => 
                <option id={id} key={id} value={category.name}>{category.name}</option> )}
            </select>
            <button onClick={this.handleClick}//{this.props.onSubmit}
            className="">
            Filter
          </button>
          <div>
              <QuoteContainer category={this.state.category} />
          </div>
         </div>
         
         
        
      )
    }
  }

  CategoryDropdown.defaultProps = {
    categories: []
  }

 