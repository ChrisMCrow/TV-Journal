import React from 'react';
import PropTypes from 'prop-types';
import ShowsGenre from './ShowsGenre';
import ShowList from './../common/ShowList';
import ShowScroll from './ShowsScroll';

function ShowsPage(props) {
  return (
    <div>
      <h1>ShowsPage</h1>
      <div className='row'>
        <div className='col-md-3'>
          <ShowsGenre genres={props.media.genres} dispatch={props.dispatch} />
        </div>
        <div className='col-md-9'>
          <ShowScroll dispatch={props.dispatch} pageNumber={props.media.selectedGenre} />
          <ShowList list={props.media.selectedGenre} />
        </div>
      </div>
    </div>
  );
}

ShowsPage.propTypes = {
  media: PropTypes.object,
  dispatch: PropTypes.func
}

export default ShowsPage;