import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'
//import QuoteCard from './QuoteCard.js'

export default class QuoteCard extends Component {

    state = {
        categories: []
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
          //console.log(this.state.quotes)
        //fetch(quotesUrl)//, { credentials: "include",
        //headers: {
        //  'Accept': 'application/json',
        //  'Content-Type': 'application/json',
        //}})
        //.then(res => {
        //  console.log(res)
        //  res.json()
        //  //console.log(res.headers.get("content-type"))
        //})
        //  .then(results => {
        //  console.log(results)
        //})
      }

    componentDidMount(){
        this.fetchCategories()
    }


    render() {
        
      return (
        <div className = "container__content">
            <h1>{this.props.content}</h1>
            <h3>{this.props.author}</h3>

            <h3>{this.props.category}</h3>

          
        </div>
      )
    }
  }

  QuoteCard.defaultProps = {
      content: "Do you have the patience to wait until your mud settles and the water is clear?",
      author: "Lao Tzu"
    }