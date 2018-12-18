import React from 'react';
import PropTypes from 'prop-types';

function ShowsGenre(props) {
  console.log( 'ShowsGenre props', props);
  return(
    <div>
      <h3>Genres</h3>
      {props.genres.map((genre) => (
        <p>{genre.name}</p>
      ))}
    </div>
  );
}


ShowsGenre.propTypes = {
  genres: PropTypes.object
}

export default ShowsGenre;