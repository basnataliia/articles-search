import React, {PropTypes} from 'react';

const formatDate = (props) => {
  const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
      let date = new Date(props.pubDate);
      let day = date.getDate();
      let monthIndex = date.getMonth();
      let year = date.getFullYear();

      return (
        <div className="Left-indent grey">{`${day}  ${monthNames[monthIndex]} ${ year}`}</div>
      );
};

formatDate.propTypes = {
  pubDate: PropTypes.string,
};

export default formatDate;
