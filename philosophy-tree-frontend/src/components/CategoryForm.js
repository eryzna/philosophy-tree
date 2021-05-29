import React, { Component } from 'react';
import QuoteForm from './QuoteForm'
//import Category from './Category.js'

export default class CategoryForm extends Component {

    constructor() {
        super();
        this.state = {
            formData: {
                name: '',
                description: '',
            },
          
          present: 'true',
          clicked: 'false',
          
        };
    }
   

    postCategory = () => {
        console.log(this.state)
        fetch('/categories', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(this.state.formData),
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
            formData: {
              ...this.state.formData, [event.target.name]: event.target.value
            }
            //({ filters: { ...this.state.filters, type: value } });
            
        })

       // console.log(this.state.formData)
    };

    categoryPresent= () => {
        let array = this.props.categories.map((c) => c.name)
        //.log(array)
        if (array.includes(this.state.formData.name)) {
            console.log('yes')
            this.setState( {
                clicked: 'true'
            })
        
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
    }
   

    render() {
        
        if (this.state.clicked === 'false') {
            return (
                <div className="form">
                    <h3>First, select a movement</h3>
                  <select name ="name" className = "" onChange={this.handleChange}>
                      <option></option>
                      {this.props.categories.map((category, id) => 
                      <option id={category.id} key={id}>{category.name}</option> )}   
                  </select>
                  <br></br>
                  <br></br>
                  <h3>Or add a new movement</h3>
                  <input
                      type="text"
                      name="name"
                      onChange={event => this.handleChange(event)} placeholder="Movement Name"></input>
                  <br></br>
                  <textarea
                        type="text"
                        name="description"
                        rows="5"
                        onChange={event => this.handleChange(event)} placeholder="Movement description"></textarea>
                    <br></br>

                  <button onClick={this.handleClick}>Submit</button>
               </div>
            )}else{
            return (
                <>
                <QuoteForm details={this.state.formData} /> 
                </>
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
   