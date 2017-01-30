import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Articles from '../../components/articles-list';
import Search from '../../components/search-article';
import NoResultPage from '../../components/no-result';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const API_KEY = '7047f9d805d940f5bda594e8fd71c086';
export default class App extends Component {
  ARTICLES_LIST_URL = (article) => `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&&fq=${article}`;
  ARTICLE_BY_ID_URL = (id) => `http://api.nytimes.com/svc/search/v2/articlesearch.json?&fq=_id:("${id}")&api-key=${API_KEY}`;

  constructor() {
    super();

    this.state = {
      articles: [],
      noResult: false,
    }

    this.searchForArticle = this.searchForArticle.bind(this);
  }

  componentDidMount(noresult = false) {
    this.setState({
      articles: [],
      noResult: noresult,
    });
}

searchForArticle(article) {
  if((!article)||(!article.replace(/\s/g, '').length)){
    let noresult = true;
    this.componentDidMount(noresult);
  }
  else{
    $.get(this.ARTICLES_LIST_URL(article))
      .then(result => {
        if(!result.response.docs.length) {
          let noresult = true;
          this.componentDidMount(noresult);
        } else {
          this.setState({
            articles: result.response.docs,
            noResult:false
          });
        }
     });
  }
}

  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <h1>Search for articles from <span>The New York Times</span></h1>
            <Search searchForArticle={this.searchForArticle}/>
            <Articles articles={this.state.articles}/>
            <NoResultPage noResult={this.state.noResult}/>
          </div>
        </MuiThemeProvider>
    );
  }
}
