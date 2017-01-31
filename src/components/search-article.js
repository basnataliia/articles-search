import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class SearchArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleQuery: '',
    }
  }

  render() {
    return (
      <div className="Search-block">
         <TextField
            onChange={(e) => this.setState({ articleQuery: e.target.value})}
            onKeyPress={(e) => {
              if (e.which === 13 || event.keyCode === 13) {
                      this.props.searchForArticle(this.state.articleQuery)
                }
              }
            }
            hintText="Search for article..."/>

        <RaisedButton
          label="Search"
          primary={true}
          onClick={(e) => {
          this.props.searchForArticle(this.state.articleQuery)
        }} />
      </div>
    );
  }
}
