import React, { Component } from 'react';
//import QuoteText from './QuoteText.js'
//import QuoteAuthor from './QuoteAuthor.js'

export default class QuoteText extends Component {
    render() {
        
      return (
        <div>
          {this.props.content}
        </div>
      )
    }
  }