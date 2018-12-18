import React from 'react';
import ShowList from './../common/ShowList';
import PropTypes from 'prop-types';

function HomeMyActivity(props) {
  return(
    <div className='section-container'>
      <style jsx>{`
      `}</style>
      <h1>My Activity</h1>
      <h2>Current Shows</h2>
      <ShowList list={props.media.trending} />
      <h2>Shows I want to watch</h2>
      <ShowList list={props.media.trending} />
    </div>
  );
}

HomeMyActivity.propTypes = {
  media: PropTypes.object
}

export default HomeMyActivity;