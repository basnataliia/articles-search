import React, {PropTypes}  from 'react';
import {Card, CardActions, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router';
import DateFormat from './date-format';
import Image from './article-image';


const ArticleDetails = (props) => {
  // let author = (props.article.byline) ? props.article.byline.original :' ';
  const url = 'http://www.nytimes.com/';
  let name = (props.articleDetail.headline.name) ? props.articleDetail.headline.name : props.articleDetail.headline.main;
  let image = (props.articleDetail.multimedia.length) ? url + props.articleDetail.multimedia[0].url : '';
  let author = (props.articleDetail.byline) ? props.articleDetail.byline.original :' ';
  return (
    <div>
      <Card zDepth={2} className="Article-Item">
        <Link to={'/'}>
          <CardActions><RaisedButton primary={true} label="Go back to search" /></CardActions>
        </Link>
        <h2 className="Left-indent Article-title">{name}</h2>
        <DateFormat pubDate={props.articleDetail.pub_date}/>
        <div className="Left-indent grey">{author}</div>
        <CardText className="Card-text">{props.articleDetail.lead_paragraph}</CardText>
        <Image image={image}/>
        <a className="Link Left-indent" href={props.articleDetail.web_url} target="_blank">View this article on "The New York Times" </a>
      </Card>
      <Divider />
    </div>
  );
};

ArticleDetails.propTypes = {
  articleDetail: PropTypes.object,
};

export default ArticleDetails;
