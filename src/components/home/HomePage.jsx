import React from 'react';
import HomeMyActivity from './HomeMyActivity';
import HomeFeed from './HomeFeed';
import HomeTrends from './HomeTrends';
import PropTypes from 'prop-types';

function HomePage(props) {
  return(
    <div className='home'>
      <div className='row'>
        <div className='col-md-7'>
          <HomeMyActivity media={props.media} user={props.user}dispatch={props.dispatch} />
        </div>
        {/* <div className='col-md-4'>
          <HomeFeed />
        </div> */}
        <div className='col-md-5'>
          <HomeTrends trending={props.media.trending} />
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  media: PropTypes.object,
  user: PropTypes.object,
  dispatch: PropTypes.func
}

export default HomePage;