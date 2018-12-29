import React from 'react';
import ShowList from './../common/ShowList';
import PropTypes from 'prop-types';

function HomeMyActivity(props) {
  return (
    <div className='home-activity'>
      <section className='home-activity-list card'>
        <div className='card-header'>Currently Watching</div>
        <div className='home-activity-scrolling'>
          <ShowList list={props.user.watching} listTitle='watching' dispatch={props.dispatch}/>
        </div>
      </section>
      <section className='home-activity-list card'>
        <div className='card-header'>Caught Up</div>
        <div className='home-activity-scrolling'>
          <ShowList list={props.user.caught_up} listTitle='caught_up' dispatch={props.dispatch}/>
        </div>
      </section>
      <section className='home-activity-list card'>
        <div className='card-header'>Shows I want to watch</div>
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