import React, { Component } from 'react';
import QuoteContent from './QuoteContent.js'





export default class Quote extends React.Component {
    render() {
      return (
        <div>
          <QuoteContent contentText={"Dear Reader: Bjarne Stroustrup has the perfect lecture oration."}/>
        </div>
      )
    }
  }