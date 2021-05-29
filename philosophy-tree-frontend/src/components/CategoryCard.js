import React, { Component } from 'react';
//import QuoteContainer from './QuoteContainer.js'

export default class CategoryCard extends Component {

    render() {
        if (this.props.name !== 'All') {
          return (
            <div className = "category__info">
                <h4>{this.props.name}</h4>
                <p>{this.props.description}  <a href="/edit-category">Edit</a></p>
            </div>
          )
        }else{
          return (
            <></>
          )
        }
      }
    }

  CategoryCard.defaultProps = {
      name: "",
      description: ""
    }