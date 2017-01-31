import React, {PropTypes} from 'react';

const ArticleImage = (props) => {
  if(!props.image.length) {
    return null;
  }
  else{
    return (
      <div>
        <img className="Article-image Left-indent" src={props.image} alt=""/>
      </div>
    );
  }
};

ArticleImage.propTypes = {
  image: PropTypes.string,
};

export default ArticleImage;
