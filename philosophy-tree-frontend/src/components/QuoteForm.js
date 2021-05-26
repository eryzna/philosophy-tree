import React from 'react';
 
class QuoteForm extends React.Component {

  state = {
    clicked: 'false',
    categories: [],
    formData: {
      category_id: 0,
      content: '',
      author: ''
    }
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
        this.getCategoryId()
        console.log(this.state.categories)
      })
      .catch(response => {
        console.log(response)
      })
  }



  getCategoryId = () => {
    let result = this.state.categories.filter(category =>  category.name === this.props.details.category)
    console.log(result)
    //console.log(this.props.categories)
    this.setState({
       formData: {
      ...this.state.formData, category_id: result[0].id }
    })
  }

  componentDidUpdate () {
    console.log(this.state.formData)
  }
    
componentDidMount() {
  //console.log(this.props)
  this.fetchCategories()
  
}

handleChange = (event) => {
  
  this.setState({
    formData: {
      ...this.state.formData, [event.target.name]: event.target.value
    }
    //({ filters: { ...this.state.filters, type: value } });
    
  })

  //console.log()
}

postQuote = () => {
  fetch('/quotes', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(this.state.formData),
  headers: {
  'Content-Type': 'application/json',
  }})
}

handleClick = (event) => {
  event.preventDefault()
  this.postQuote()
  //console.log(this.state)
}

  render() {
    return (
        <div class= "container">
            <div class='category_dropdown'>
                <h3>Submit a Quote for {this.props.details.category} </h3>
                    <form>
                      
                        <label>Quote</label>
                      <textarea
                        type="text"
                        name="content"
                        onChange={event => this.handleChange(event)}
                        //value={this.props.formData.content}
                        value={this.state.content}
                      />
                      <br></br>
                      <br></br>
                      <label>Author</label>
                      <input
                       
                        type="text"
                        name="author"
                        onChange={event => this.handleChange(event)}
                        value={this.state.author} 
                        />
                        <button onClick={this.handleClick}>Submit</button>
                    </form>
                
            </div>
        </div>
    )
  }
}
 
export default QuoteForm;