import React from 'react';
import PropTypes from 'prop-types';
import ShowComponent from './ShowComponent';
import v4 from 'uuid';

function ShowList(props) {
  return(
    <div className='showlist-container'>
      <style jsx>{`
        .showlist-container {
          display: inline-block;
        }
        .show-component {
          float: left;
          margin: 10px;
        }
      `}</style>
      {Object.values(props.shows).map((show) => (
        <span className='show-component'>
          <ShowComponent key={v4()} show={show} />
        </span>
      ))}
    </div>
  );
}

ShowList.propTypes = {
  shows: PropTypes.object
}

export default ShowList;