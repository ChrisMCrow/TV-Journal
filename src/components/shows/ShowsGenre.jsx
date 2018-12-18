import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './../../actions';
import v4 from 'uuid';

function ShowsGenre(props) {
  function handleGenreSelection(genreId) {
    props.dispatch(actions.discoverGenre(genreId));
  }

  return(
    <div className='section-container'>
      <style jsx>{`
        .genre-list-item {
          cursor: pointer;
        }
      `}</style>
      <h3>Genres</h3>
      {props.genres ? (
        props.genres.map((genre) => (
          <p onClick={() => handleGenreSelection(genre.id)} className='genre-list-item' key={v4()}>{genre.name}</p>
        ))
      ) : (
        null
      )}
    </div>
  );
}


ShowsGenre.propTypes = {
  genres: PropTypes.array,
  dispatch: PropTypes.func
}

export default ShowsGenre;