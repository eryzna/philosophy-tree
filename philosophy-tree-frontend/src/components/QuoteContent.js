import React, { Component } from 'react';
//import Quote from './Quote.js'


export default class QuoteContent extends Component {
    render() {
      return (
        <div>
          {this.props.contentText}
        </div>
      )
    }
  }