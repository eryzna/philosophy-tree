import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'
import QuoteCard from './QuoteCard.js'

export default class Quote extends Component {
    render() {
        
      return (
        <>
          {this.props.quotes.map((quote, id) => 
          <div key={id}>
            <QuoteCard content={quote.content} author={quote.author} />
            </div>
            
          )}
        </>
      )
    }
  }

  Quote.defaultProps = {
      quotes: []
    }

    //<div key={id}>
               // <><h1>{quote.content}</h1><p>{quote.author}</p></>
           // </div>

  ////{this.props.quotes.map((quote, id) => 
  //  <div key={id}>
  //      <><h1>{quote.content}</h1><p>{quote.author}</p></>
  //  </div>
  //)}