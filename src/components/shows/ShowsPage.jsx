import React from 'react';
import PropTypes from 'prop-types';
import ShowsGenre from './ShowsGenre';

function ShowsPage(props) {
  return (
    <div>
      <h1>ShowsPage</h1>
      <div className='row'>
        <div className='col-md-3'>
          <ShowsGenre genres={props.media.genres} dispatch={props.dispatch} />
        </div>
        <div className='col-md-9'>
          {/* <ShowList list={props.media.selectedGenre} /> */}
        </div>
      </div>
    </div>
  );
}

ShowsPage.propTypes = {
  media: PropTypes.object,
  dispatch: PropTypes.func
  // selectedGenre: PropTypes.object
}

export default ShowsPage;