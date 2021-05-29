import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css';
import './carousel.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuoteFormParent from  './components/QuoteFormParent';
import EditCategory from './components/EditCategory'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render((
  <Router>
      <Route exact path="/"component={App} />
      <Route exact path="/new-quote" component={QuoteFormParent} />
      <Route exact path="/edit-category" component={EditCategory} />
      
  </Router>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
