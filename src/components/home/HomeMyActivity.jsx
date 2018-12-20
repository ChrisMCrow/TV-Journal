import React from 'react';
import ShowList from './../common/ShowList';
import PropTypes from 'prop-types';

function HomeMyActivity(props) {
  return(
    <div className='home-activity'>
      <h1>My Activity</h1>
      <h2>Current Shows</h2>
      <ShowList list={props.user.authUser.caughtUp} />
      <h2>Shows I want to watch</h2>
      <ShowList list={props.media.trending} />
    </div>
  );
}

HomeMyActivity.propTypes = {
  media: PropTypes.object,
  user: PropTypes.object
}

export default HomeMyActivity;