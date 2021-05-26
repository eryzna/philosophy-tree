import React, { Component } from 'react';
import QuoteForm from './QuoteForm'
//import Category from './Category.js'

export default class CategoryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          category: '',
          present: 'true',
          clicked: 'false',
          
        };
    }
   

    postCategory = () => {
        console.log(this.state)
        fetch('/categories', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(this.state.category),
        headers: {
        'Content-Type': 'application/json',
        
        }})
        this.setState( {
            clicked: 'true'
        })
        
    }

    handleChange = (event) => {
        console.log(event.target.value)
        
        //this.getCategoryId(event.target.value)
        this.setState({ 
            category: event.target.value,     
        });
    };

    categoryPresent= () => {
        let array = this.props.categories.map((c) => c.name)
        //.log(array)
        if (array.includes(this.state.category)) {
            console.log('yes')
        }else {
            console.log('no')
            this.setState({
                present: 'no'
            })
            this.postCategory()
        }
    }

    handleClick = () => {
        this.categoryPresent()
        
        console.log(this.state.category)
        
    }
    
    
    componentDidUpdate(){
        //this.props.fetchCategories()
    }

    render() {
        
        if (this.state.clicked === 'false') {
            return (
                <div className="category_dropdown">
                    <h3>First, select a category</h3>
                  <select name ="name" className = "" onChange={this.handleChange}>
                      <option></option>
                      {this.props.categories.map((category, id) => 
                      <option id={category.id} key={id}>{category.name}</option> )}   
                  </select>
                  <br></br>
                  <br></br>
                  <label>Or add new</label>
                  <input
                      type="text"
                      name="category"
                      onChange={event => this.handleChange(event)}></input>
                  <br></br>
                  <button onClick={this.handleClick}>Submit</button>
               </div>
            )}else{
            return (
                <div>
                <QuoteForm details={this.state} /> 
                </div>
            )
        }
    }
  }

  CategoryForm.defaultProps = {
    categories: []
  }

  //<button onClick={this.props.handleClick}//{this.props.onSubmit}
  //className="">
  //Filter
  //</button>

  //{this.props.categories.map((category, id) => 
   // <option id={category.id} key={id}>{category.name}</option> )}
   