import React from 'react';
import PropTypes from 'prop-types';
import ShowsGenre from './ShowsGenre';

function ShowsPage(props) {
  console.log('ShowsPage props', props);
  return(
    <div>
      <h1>ShowsPage</h1>
      <ShowsGenre genres={props.media.genres} />
    </div>
  );
}

ShowsPage.propTypes = {
  media: PropTypes.object
}

export default ShowsPage;