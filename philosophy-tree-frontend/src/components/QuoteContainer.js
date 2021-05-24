import React, { Component } from 'react';
import CategoryDropdown from './CategoryDropdown.js';
//import QuoteContent from './QuoteContent.js'
//import QuoteAuthor from './QuoteAuthor.js'
import Quote from './Quote.js'

//import QuotesList from './QuotesList.js'
 
class QuoteContainer extends Component {

  constructor() {
    super();
    this.state = {
      quotes: [],
    };
}
  
  componentDidUpdate() {
    console.log(this.props)
    this.categoryFilter()
    //this.fetchQuotes()
  }

  categoryFilter = () => {
    console.log(this.props.categoryFilter)
  }

  fetchQuotes = () => {
    console.log('fetching quotes')
    console.log('')
    let endpoint = '/categories';

    if (this.props.category !== 'all') {
      endpoint += `?name=${this.props.category}`;
      console.log(endpoint)
    }

    fetch(endpoint)
      .then(res => res.json())
      
      .then(quotes => this.setState({ quotes: quotes}));
  };

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
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
      


 
export default QuoteContainer