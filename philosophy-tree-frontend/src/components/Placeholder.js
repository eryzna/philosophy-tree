import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'


export default class Placeholder extends Component {

    
    render() {
        
      return (
        <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#333"/></svg>

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Please select a movement.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
          </div>
        </div>
      </div>
      )
    }
  }