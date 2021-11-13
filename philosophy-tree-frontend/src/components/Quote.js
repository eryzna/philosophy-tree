import React, { Component } from 'react';

export default class Quote extends Component {
    
    render() {
        
      return (

      <div>
        
            <h1>{this.props.content}</h1>
            <p>{this.props.author}</p>
            
        </div>
      )
    }
  }

  Quote.defaultProps = {
      quotes: []
    }

    //like feature

    //state = {
    //  counter: 0
    //}
  //
    //handleClick = () => {
    //  this.setState ({
    //    counter: this.state.counter + 1
    //  })
    //}
    //<button className="btn" onClick = {this.handleClick}>Like</button>

    //<p>{this.state.counter}</p>

