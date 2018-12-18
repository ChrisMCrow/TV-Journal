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
      {props.list ? (
        Object.values(props.list).map((show) => (
          <span className='show-component' key={v4()}>
            <ShowComponent show={show} />
          </span>
        ))
      ):(
        null
      )}
    </div>
  );
}

ShowList.propTypes = {
  list: PropTypes.object
}

export default ShowList;