import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'

export default class Quote extends Component {

  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState ({
      counter: this.state.counter + 1
    })
  }
    
    render() {
        
      return (

      <div>
        
            <h1>{this.props.content}</h1>
            <p>{this.props.author}</p>
            <button onClick = {this.handleClick}>Like</button>
            <p>{this.state.counter}</p>
            

           
        </div>
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