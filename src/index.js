import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import {Router, Route, browserHistory} from 'react-router';

import Article from "./containers/Article/Article";

import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="articles/:id" component={Article}/>
    </Router>,
  document.getElementById('root')
);
