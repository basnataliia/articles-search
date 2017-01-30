import React, {PropTypes}  from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router';

injectTapEventPlugin();

const ArticleItem = (props) => {
  let name = (props.article.headline.name) ? props.article.headline.name : props.article.headline.main;
  let author = (props.article.byline) ? props.article.byline.original :' ';

  return (
    <div>
      <Card zDepth={2} className="Article-Item">
        <CardTitle title={name} subtitle={author} />
        <CardText>{props.article.lead_paragraph}</CardText>
        <Link to={'/articles/' + props.article._id}>
          <CardActions><RaisedButton  primary={true} label="View more details" /></CardActions>
        </Link>
      </Card>
      <Divider />
    </div>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.object,
};

export default ArticleItem;
