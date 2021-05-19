import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'
//import QuoteRender from './QuoteRender.js'

export default class Quote extends Component {
    render() {
        
      return (
        <div>
          {this.props.quotes.map((quote, id) => 
            <div key={id}>
                <><h1>{quote.content}</h1><p>{quote.author}</p></>
            </div>
          )}
        </div>
      )
    }
  }

