import React from 'react';
import Paper from 'material-ui/Paper';

const NoResultPage = (props) => {
  if(props.noResult){
    return (
        <div>
          <Paper className="No-result" zDepth={1}>
            Sorry, no results found. <br/><br/>
            Try Again! :)
          </Paper>

        </div>
      );
    }
    else{
      return null;
    }
};

export default NoResultPage;
