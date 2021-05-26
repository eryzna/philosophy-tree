import React from 'react';
import QuoteForm from './QuoteForm'
import DisplayData from './DisplayData'
import CategoryForm from './CategoryForm'
 
class QuoteFormParent extends React.Component {
    constructor() {
        super();
        this.state = {
          categories: [],
          category_id: [],
          content: '',
          author: ''
        };
    }

  componentDidMount() {
      this.fetchCategories()
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
        console.log(this.state.categories)
      })
      .catch(response => {
        console.log(response)
      })
}

 
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
 
  render() {
    return (
      <div className="container">
          <CategoryForm 
          categories={this.state.categories} 
          fetchCategories={this.fetchCategories}
          />
          
        
        
      </div>
    )
  }
}
 
export default QuoteFormParent;

//<DisplayData formData={this.state} />

//<QuoteForm
//    formData={this.state}
//    handleChange={this.handleChange}
///>