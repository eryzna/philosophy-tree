import React, { Component } from 'react';
//import QuoteText from './QuoteText.js'
//import QuoteAuthor from './QuoteAuthor.js'

export default class SlideIndicators extends Component {
    render() {
        
      return (
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      )
    }
  }