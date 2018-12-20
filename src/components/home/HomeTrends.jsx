import React from 'react';
import PropTypes from 'prop-types';
import ShowList from './../common/ShowList';

function HomeTrends(props) {
  return(
    <div className='home-trends'>
      <h1>Trending</h1>
      <ShowList list={props.trending}/>
    </div>
  );
}

HomeTrends.propTypes = {
  trending: PropTypes.array
}

export default HomeTrends;