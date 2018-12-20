import React from 'react';
import ShowList from './../common/ShowList';
import PropTypes from 'prop-types';

function HomeMyActivity(props) {
  return (
    <div className='home-activity'>
      <h1>My Activity</h1>
      <h2>Currently Watching</h2>
      <div className='home-activity-scrolling'>
        <ShowList list={props.user.watching} listTitle='watching' />
      </div>
      <div className='home-activity-scrolling'>
        <h2>Caught Up</h2>
        <ShowList list={props.user.caught_up} listTitle='caught_up' />
      </div>
      <div className='home-activity-scrolling'>
        <h2>Shows I want to watch</h2>
        <ShowList list={props.user.watchlist} listTitle='watchlist' />
      </div>

    </div>
  );
}

HomeMyActivity.propTypes = {
  media: PropTypes.object,
  user: PropTypes.object
}

export default HomeMyActivity;