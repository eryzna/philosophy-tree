import React, { Component } from 'react';

export default class Header extends Component {
    

    render() {
        
      return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Philosophy Tree</a>
                <a href = "/new-quote" >Submit a Quote</a>
                   
                </div>

                

    

            </nav>
            
        </header>
        )}
    }

    //<form class="d-flex">
    //                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //                    <button class="btn btn-outline-success" type="submit">Search</button>
    //                </form>