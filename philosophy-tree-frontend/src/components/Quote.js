import React, { Component } from 'react';
//import QuoteContent from './QuoteContent.js'
 
class Quote extends Component {

  //state = {
  //  quotes: []
  //}

  constructor() {
    super();
    this.state = {
      quotes: [],
    };
  }

  render() {
    return (
      <div>
        {this.state.quotes.map((quote, id) => <h1 key={id}>{quote.author}</h1>)}
      </div>
    )
  }

  fetchQuotes() {
    const quotesUrl = 'http://localhost:4000/quotes'
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
      
 
  componentDidMount() {
    this.fetchQuotes()
  }

    //fetch('http://localhost:3000/quotes')
      //.then(response => {
      //  console.log(response.json)
      //  if (!response.ok) { throw response }
      //  return response.json()  //we only get here if there is no error
      //})
      //.then(json => {
      //  this.setState({
      //  quotes: json
      //  })
      //})
      //.catch(response => {
       // console.log(response)
      //})

    
      //console.warn(xhr.responseText)
      
}

 
export default Quote