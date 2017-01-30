import React from 'react';
import ArticleItem from './article-item';


const ArticleList = (props) => {
  if(!props.articles.length) {
    return null;
  }
  else{
    return (
        <div>
          {props.articles.map((article, index)=>
            <ArticleItem
                key={index}
                article={article}/>
          )}
        </div>
      );
  }
}

export default ArticleList;
