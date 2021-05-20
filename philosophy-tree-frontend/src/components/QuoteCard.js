import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'
//import QuoteCard from './QuoteCard.js'

export default class QuoteCard extends Component {
    render() {
        
      return (
        <div>
            <h1>{this.props.content}</h1>
            <p>{this.props.author}</p>

          
        </div>
      )
    }
  }

  QuoteCard.defaultProps = {
      content: "Hello",
      author: "Elana Ryznar"
    }