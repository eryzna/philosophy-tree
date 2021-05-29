import React, { Component } from 'react';
import Header from './Header'

export default class CategoryForm extends Component {

    state = {
        categories: [], 
        category: '',
        description: '',
        formData: {
            name: '',
            description: '',
            id: 0
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
            console.log(this.state.categories)
          })
          .catch(response => {
            console.log(response)
          })
    }

    postFormData =  async () => {
        console.log(this.state.formData)
        let id = this.state.formData.id
        await fetch(`/categories/${id}`, {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(this.state.formData),
        headers: {
        'Content-Type': 'application/json',
        }})
        window.alert('Success!')
        //window.history.back()
    }

    componentDidMount () {
        this.fetchCategories()
    }

    handleChange = (event) => {
        console.log(event.target.value)
        
        let result = this.state.categories.filter(category => category.name === event.target.value)
        //console.log(result[0].description)
        this.setState({ 
            category: result[0],
            formData: {
                ...this.state.formData, name: event.target.value, id: result[0].id
            }   
        });
        console.log(this.state.formData)
        console.log(this.state.category)
    };

    handleClick = () => {
        this.postFormData()

    }

    handleDescriptionChange = (event) => {
        console.log(event.target.value)
        this.setState ({
            formData: {
                ...this.state.formData, description: event.target.value
            }
        })
        console.log(this.state.formData)
    }


    render() {
            return (
                <>
                <Header />
                <div className = "container">
                    <div className = "container__content">
                        <div className="form">
                    `   <h3>Select a movement to edit</h3>
                        <select name ="name" className = "" onChange={event => this.handleChange(event)}>
                            <option></option>
                           {this.state.categories.map((category, id) => 
                        <option id={category.id} key={id}>{category.name}</option> )}   
                        </select>
                        <br></br>
                        <textarea
                            type="text"
                            name="description"
                            rows="5"
                            onChange={event => this.handleDescriptionChange(event)} defaultValue={this.state.category.description}></textarea>
                        <br></br>

                        <button onClick={this.handleClick}>Submit</button>
                        </div>
                    </div>
                </div>
                </>
        
            )
        }
  }

  

   