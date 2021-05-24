import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'


export default class QuoteContent extends Component {
    render() {
      return (
        <div>
          {this.props.content}
        </div>
      )
    }
  }