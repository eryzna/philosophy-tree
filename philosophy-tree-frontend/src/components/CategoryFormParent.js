import React from 'react';
import CategoryForm from './CategoryForm'
import Header from './Header'

 
class CategoryFormParent extends React.Component {
    constructor() {
        super();
        this.state = {
          categories: [],
          category_id: [],
          content: '',
          author: ''
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
          console.log(this.state.categories)
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
      <>
      <Header />
      <div className="container">
        <div className="container__content">
          <CategoryForm 
          categories={this.state.categories} 
          
          />
          
          </div>
        
      </div>
      </>
    )
  }
}
export default CategoryFormParent


//<DisplayData formData={this.state} />

//<QuoteForm
//    formData={this.state}
//    handleChange={this.handleChange}
///>