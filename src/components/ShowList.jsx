import React from 'react';
import PropTypes from 'prop-types';
import ShowComponent from './ShowComponent';

function ShowList(props) {
  return(
    <div>
      <p>Show List Component</p>
      {Object.keys(props.shows).forEach((show) =>
        <ShowComponent show={show}/>
      )}
    </div>
  );
}

ShowList.propTypes = {
  shows: PropTypes.object
}

export default ShowList;