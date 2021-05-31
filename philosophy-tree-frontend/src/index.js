import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css';
import './carousel.css'
import Reducer from './reducers/Reducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuoteFormParent from  './components/QuoteFormParent';
import EditCategory from './components/EditCategory'

 
const store = createStore(
  Reducer, 
  applyMiddleware(thunk));
 

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Router>
      <Route exact path="/"component={App} />
      <Route exact path="/new-quote" component={QuoteFormParent} />
      <Route exact path="/edit-category" component={EditCategory} />
      
    </Router>),
      <App />
    </React.StrictMode>,
  </Provider>,
  
  document.getElementById('root')
);

ReactDOM.render(
  <Provider store={store}>
  <Router>
      <Route exact path="/"component={App} />
      <Route exact path="/new-quote" component={QuoteFormParent} />
      <Route exact path="/edit-category" component={EditCategory} />
      
  </Router>),
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
