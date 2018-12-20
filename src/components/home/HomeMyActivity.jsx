import React from 'react';
import ShowList from './../common/ShowList';
import PropTypes from 'prop-types';

function HomeMyActivity(props) {
  return (
    <div className='home-activity'>
      <h1>My Lists</h1>
      <section className='home-activity-list'>
      <h3>Currently Watching</h3>
        <div className='home-activity-scrolling'>
          <ShowList list={props.user.watching} listTitle='watching' dispatch={props.dispatch}/>
        </div>
      </section>
      <section className='home-activity-list'>
        <h3>Caught Up</h3>
        <div className='home-activity-scrolling'>
          <ShowList list={props.user.caught_up} listTitle='caught_up' dispatch={props.dispatch}/>
        </div>
      </section>
      <section className='home-activity-list'>
        <h3>Shows I want to watch</h3>
        <div className='home-activity-scrolling'>
          <ShowList list={props.user.watchlist} listTitle='watchlist' dispatch={props.dispatch}/>
        </div>
      </section>
    </div>
  );
}

HomeMyActivity.propTypes = {
  media: PropTypes.object,
  user: PropTypes.object,
  dispatch: PropTypes.func
}

export default HomeMyActivity;