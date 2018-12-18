import React from 'react';
import PropTypes from 'prop-types';
import ShowList from './../common/ShowList';

function HomeTrends(props) {
  return(
    <div className='section-container'>
      <h1>HomeTrends</h1>
      <ShowList list={props.trending}/>
    </div>
  );
}

HomeTrends.propTypes = {
  trending: PropTypes.object
}

export default HomeTrends;