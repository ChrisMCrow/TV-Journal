import React from 'react';
import HomeMyActivity from './HomeMyActivity';
import HomeFeed from './HomeFeed';
import HomeTrends from './HomeTrends';
import PropTypes from 'prop-types';

function HomePage(props) {
  return(
    <div className='page'>
      <style jsx>{`

      `}</style>
      <div className='row'>
        <div className='col-4'>
          <HomeMyActivity media={props.media} />
        </div>
        <div className='col-4'>
          <HomeFeed />
        </div>
        <div className='col-4'>
          <HomeTrends trending={props.media.trending} />
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  media: PropTypes.object
}

export default HomePage;