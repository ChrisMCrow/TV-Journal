import React from 'react';
import PropTypes from 'prop-types';
import { ShowComponent } from './../../components';
import v4 from 'uuid';

function ShowList(props) {
  return(
    <article className='show-list'>
      {props.list ? (
        Object.values(props.list).map((show) => (
          <span className='show-list-item' key={v4()}>
            <ShowComponent show={show} />
          </span>
        ))
      ):(
        null
      )}
    </article>
  );
}

ShowList.propTypes = {
  list: PropTypes.object
}

export default ShowList;