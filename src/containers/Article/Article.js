import React, { Component } from 'react';
import './Article.css';
import $ from 'jquery';
import ArticleDetails from '../../components/article-details';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import {Link} from 'react-router';

const API_KEY = '7047f9d805d940f5bda594e8fd71c086';
export default class Article extends Component {

  ARTICLE_BY_ID_URL = (id) => `http://api.nytimes.com/svc/search/v2/articlesearch.json?&fq=_id:("${id}")&api-key=${API_KEY}`;

  constructor() {
    super();

    this.state = {
      article: [],
    }
  }

  componentDidMount() {
    let articleID = this.props.params.id;
		$.get(this.ARTICLE_BY_ID_URL(articleID))
		.then(result => {this.setState({article: result.response.docs});
	  });
}


  render() {
    if(!this.state.article.length){
    		return null;
    }
    return (
        <MuiThemeProvider>
          <div className="Article">
            <ArticleDetails articleDetail={this.state.article[0]}/>
          </div>
        </MuiThemeProvider>
    );
  }
}
