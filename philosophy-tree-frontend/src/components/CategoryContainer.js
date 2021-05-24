
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
          //quotes: [],
          category: 'All'
        };
    }

    filterByCategory = () => {
        //console.log("filter by category in category")
        console.log(this.state.category)
        //console.log('fetching quotes by  category')
        //console.log('')
        let endpoint = '/categories';
        
        if (this.props.category !== 'all') {
          endpoint += `?name=${this.state.category}`;
          console.log(endpoint)
        }
        
        fetch(endpoint)
          .then(res => res.json())
          
          
          .then(category => this.setState({ quotes: category.quotes}));

          //console.log(this.state.quotes)
        
        
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
            //console.log(this.state.categories)
          })
          .catch(response => {
            console.log(response)
          })
    }

    onChangeName = (event) => {
        console.log(event.target.value)
        //console.log({target: {value}})
        //console.log({target: {value, id} })
        this.setState({ 
            category: event.target.value,     
        });
    };

    handleClick = () => {
        //console.log(event)
        //console.log("clicked")
        console.log(this.state)
        //console.log(this.props.categories[1])
        this.filterByCategory()
    }


    componentDidMount() {
        this.fetchCategories()
        console.log(this.state)
    }

    render() {
    
        return (
            <div >
                <CategoryDropdown 
                categories={this.state.categories} 
                filterByCategory={this.filterByCategory}
                onChangeName={this.onChangeName}
                handleClick={this.handleClick}/> 
                
            </div>
        )
    }
}



export default CategoryContainer

//<Category categories={this.state.categories} />
//<CategoryDropdown categories={this.state.categories} />
