
import React, { Component } from 'react';
//import QuoteContent from './QuoteContent.js'
//import QuoteAuthor from './QuoteAuthor.js'
import CategoryCard from './CategoryCard'
import CategoryDropdown from './CategoryDropdown.js'
import QuoteContainer from './QuoteContainer'

class CategoryContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          categories: [],
          quotes: [],
          categoryName: 'All',
          categoryId: '0',
          description: ''
        };
    }

    getCategoryId = (event) => {
        console.log("get Category id")

        let result = this.props.categories.filter(category => category.name === event)
        if (event !== 'All') {
            this.setState({
               categoryName: result[0].name, 
               categoryId: result[0].id,
               quotes: result[0].quotes,
               description: result[0].description
            })
        } else {
            this.setState({
              quotes: this.props.quotes
            })
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

    
    onChangeName = (event) => {
        console.log(event.target.value)
        this.getCategoryId(event.target.value)
    };

    handleClick = () => {
        //console.log(event)
        console.log("clicked")
        console.log(this.state)
        //console.log(this.props.categories[1])
        //this.onChangeName()
    }


    render() {
      if (this.state.categoryName === 'All') {
        return (
            <div className = "container" >
                <div className = "category__header">
                <CategoryDropdown 
                categories={this.props.categories} 
                filterByCategory={this.filterByCategory}
                onChangeName={this.onChangeName}
                handleClick={this.handleClick}/>  
                <CategoryCard  name={this.state.categoryName} description={this.state.description} id={this.state.categoryId}/>
                </div>

                <div className="quote__container"><QuoteContainer quotes={this.props.quotes}/></div>
            </div>
        )
      }else {
        return (
          <div className = "container" >
              <div className = "category__header">
              <CategoryDropdown 
              categories={this.props.categories} 
              filterByCategory={this.filterByCategory}
              onChangeName={this.onChangeName}
              handleClick={this.handleClick}/>  
              <CategoryCard  name={this.state.categoryName} description={this.state.description} id={this.state.categoryId}/>
              </div>

              <div className="quote__container"><QuoteContainer quotes={this.state.quotes}/></div>
          </div>
        )
      }
    }
}


export default CategoryContainer


