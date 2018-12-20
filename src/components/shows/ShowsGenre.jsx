import React from 'react';
import PropTypes from 'prop-types';
import { discoverGenre } from './../../actions';
import { ShowSearch } from './../../components';
import v4 from 'uuid';

function ShowsGenre(props) {

  function handleGenreSelection(genreId, genreName) {
    props.dispatch(discoverGenre(genreId));
    props.onSelect(genreName);
  }

  return(
    <aside className='shows-genre'>
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
    </aside>
  );
}


ShowsGenre.propTypes = {
  genres: PropTypes.array,
  dispatch: PropTypes.func,
  onSelect: PropTypes.func
}

export default ShowsGenre;