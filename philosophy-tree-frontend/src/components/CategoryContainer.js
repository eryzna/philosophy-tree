
import React, { Component } from 'react';
//import QuoteContent from './QuoteContent.js'
//import QuoteAuthor from './QuoteAuthor.js'
//import Category from './Category.js'
import CategoryDropdown from './CategoryDropdown.js'
//import QuoteContainer from './QuoteContainer'

class CategoryContainer extends Component {

    constructor() {
        super();
        this.state = {
          categories: [],
        };
    }

    fetchCategories() {
        const categoriesUrl = '/categories'
        //let quotes = []
        fetch(categoriesUrl)
          .then(response => {
            console.log(response)
            if (!response.ok) { throw response }
            return response.json()  //we only get here if there is no error
          })
          .then(json => {
            console.log(json)
            this.setState({
              categories: json
            })
          })
          .catch(response => {
            console.log(response)
          })
    }

    componentDidMount() {
        this.fetchCategories()
    }

    render() {
    
        return (
            <div >
                <CategoryDropdown categories={this.state.categories} />
                
                
                
            </div>
        )
    }
}



export default CategoryContainer

//<Category categories={this.state.categories} />
//<CategoryDropdown categories={this.state.categories} />
