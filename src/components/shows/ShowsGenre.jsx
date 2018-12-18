import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './../../actions';
import v4 from 'uuid';

function ShowsGenre(props) {

  function handleGenreSelection(genreId, genreName) {
    props.dispatch(actions.discoverGenre(genreId));
    props.onSelect(genreName);
  }

  return(
    <div className='section-container'>
      <style jsx>{`
        .genre-list-item {
          cursor: pointer;
        }
        .selected-item {
          color: black;
          background-color: #ccc; 
        }
      `}</style>
      <h3>Genres</h3>
      {props.genres ? (
        props.genres.map((genre) => (
          <p onClick={() => handleGenreSelection(genre.id, genre.name)} className='genre-list-item' id={'id' + genre.id} key={v4()}>{genre.name}</p>
        ))
      ) : (
        null
      )}
    </div>
  );
}


ShowsGenre.propTypes = {
  genres: PropTypes.array,
  dispatch: PropTypes.func,
  onSelect: PropTypes.func
}

export default ShowsGenre;