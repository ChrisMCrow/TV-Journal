import React from 'react';
import PropTypes from 'prop-types';
import { discoverGenre } from './../../actions';
import v4 from 'uuid';
import ShowSearch from './../common/ShowSearch';

function ShowsGenre(props) {

  function handleGenreSelection(genreId, genreName) {
    props.dispatch(discoverGenre(genreId));
    props.onSelect(genreName);
  }

  return(
    <div className='shows-genre'>
      <ShowSearch dispatch={props.dispatch} />
      <h3>Genres</h3>
      {props.genres ? (
        props.genres.map((genre) => (
          <p 
            onClick={() => handleGenreSelection(genre.id, genre.name)} 
            className='shows-genre-list' 
            id={'id' + genre.id} 
            key={v4()}
          >
            {genre.name}
          </p>
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