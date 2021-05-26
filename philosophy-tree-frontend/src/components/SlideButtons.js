import React, { Component } from 'react';
//import QuoteText from './QuoteText.js'
//import QuoteAuthor from './QuoteAuthor.js'

export default class SlideButtons extends Component {
    render() {
        
      return (
          <>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </>
      )
    }
  }