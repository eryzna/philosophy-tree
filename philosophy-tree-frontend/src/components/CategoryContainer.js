
import React, { Component } from 'react';
//import QuoteContent from './QuoteContent.js'
//import QuoteAuthor from './QuoteAuthor.js'
//import Category from './Category.js'
import CategoryDropdown from './CategoryDropdown.js'
import QuoteContainer from './QuoteContainer'

class CategoryContainer extends Component {

    constructor() {
        super();
        this.state = {
          categories: [],
          quotes: [],
          categoryName: 'All',
          categoryId: '0'
        };
    }

    getCategoryId = (event) => {
        console.log("get Category id")

        let result = this.state.categories.filter(category => category.name === event)
        if (event !== 'All') {
            this.setState({
               categoryName: result[0].name, 
               categoryId: result[0].id,
               quotes: result[0].quotes
            })
        } else {
            this.fetchQuotes()
        }
        console.log(event)
        console.log(result[0])
        //this.setState({
        //    categoryName: result[0].name, 
        //    categoryId: result[0].id,
        //    quotes: result[0].quotes
        //  })
        console.log(this.state)

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
        this.getCategoryId(event.target.value)
        //this.setState({ 
        //    category: event.target.value,     
        //});
    };

    handleClick = () => {
        //console.log(event)
        console.log("clicked")
        console.log(this.state)
        //console.log(this.props.categories[1])
        //this.onChangeName()
    }

    fetchQuotes() {
        const quotesUrl = '/quotes'
        //let quotes = []
        fetch(quotesUrl)
          .then(response => {
            console.log(response)
            if (!response.ok) { throw response }
            return response.json()  //we only get here if there is no error
          })
          .then(json => {
            console.log(json)
            this.setState({
              quotes: json
            })
            console.log(this.state.quotes)
          })
          .catch(response => {
            console.log(response)
          })
    }


    componentDidMount() {
        this.fetchCategories()
        this.fetchQuotes()
    }

    render() {
    
        return (
            <div >
                <div>
                <CategoryDropdown 
                categories={this.state.categories} 
                filterByCategory={this.filterByCategory}
                onChangeName={this.onChangeName}
                handleClick={this.handleClick}/>  
                </div>
                <div className = "">
                    <QuoteContainer quotes={this.state.quotes}/>
                </div>
            </div>
        )
    }
}



export default CategoryContainer

//<Category categories={this.state.categories} />
//<CategoryDropdown categories={this.state.categories} />
