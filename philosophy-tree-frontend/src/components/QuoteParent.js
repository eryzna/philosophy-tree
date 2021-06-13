import React, { Component } from 'react';
//import CategoryDropdown from './CategoryDropdown.js';
//import QuoteContent from './QuoteContent.js'
//import QuoteAuthor from './QuoteAuthor.js'
import Quote from './Quote.js'

//import QuotesList from './QuotesList.js'
 
class QuoteParent extends Component {

  

  render() {
    return (
      <div>
        {this.props.quotes.map((quote, id) => 
        <Quote key={id} content={quote.content} author={quote.author}/>)}
      </div>
      
    )
  }
}

      //<div>
      //  {this.props.quotes.map((quote) => 
      //  <Quote content={quote.content} author={quote.author}/>)}
      //</div>
  //
  //<QuoteContent content = {this.state.quotes.map((quote, id) => <h1 key={id}>{quote.content}</h1>)}/>

  //fetchQuotes() {
  //  const quotesUrl = '/quotes'
  //  //let quotes = []
  //  fetch(quotesUrl)
  //    .then(response => {
  //      console.log(response)
  //      if (!response.ok) { throw response }
  //      return response.json()  //we only get here if there is no error
  //    })
  //    .then(json => {
  //      console.log(json)
  //      this.setState({
  //        quotes: json
  //      })
  //    })
  //    .catch(response => {
  //      console.log(response)
  //    })
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
  
      
 
  //componentDidMount() {
  //  this.fetchQuotes()
  //}

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
      


 
export default QuoteParent