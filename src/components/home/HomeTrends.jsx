import React from 'react';
import PropTypes from 'prop-types';
import ShowList from './../common/ShowList';

function HomeTrends(props) {
  return(
    <div className='home-trends card'>
      <div className='card-header'>Trending</div>
      <ShowList list={props.trending}/>
    </div>
  );
}

HomeTrends.propTypes = {
  trending: PropTypes.array
}

export default HomeTrends;