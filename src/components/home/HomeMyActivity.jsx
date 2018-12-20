import React from 'react';
import ShowList from './../common/ShowList';
import PropTypes from 'prop-types';

function HomeMyActivity(props) {
  return(
    <div className='home-activity'>
      <h1>My Activity</h1>
      <h2>Currently Watching</h2>
      <ShowList list={props.user.watching} listTitle='watching' />
      <h2>Caught Up</h2>
      <ShowList list={props.user.caught_up} listTitle='caught_up' />
      <h2>Shows I want to watch</h2>
      <ShowList list={props.user.watchlist} listTitle='watchlist' />
    </div>
  );
}

HomeMyActivity.propTypes = {
  media: PropTypes.object,
  user: PropTypes.object
}

export default HomeMyActivity;