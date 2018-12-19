import React from 'react';
import PropTypes from 'prop-types';
import ShowComponent from './ShowComponent';
import v4 from 'uuid';

function ShowList(props) {
  return(
    <div className='show-list'>
      {props.list ? (
        Object.values(props.list).map((show) => (
          <span className='show-list-item' key={v4()}>
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