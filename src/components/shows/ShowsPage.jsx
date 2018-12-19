import React from 'react';
import PropTypes from 'prop-types';
import ShowsGenre from './ShowsGenre';
import ShowList from './../common/ShowList';
import ShowScroll from './ShowsScroll';

function ShowsPage(props) {

  function handleSelect(genreName) {
    document.getElementById('genre-title').innerHTML = genreName;
  }

  return (
    <div>
      <h1>ShowsPage</h1>
      <div className='row'>
        <div className='col-md-3'>
          <ShowsGenre genres={props.media.genres} dispatch={props.dispatch} onSelect={handleSelect} />
        </div>
        <div className='col-md-9'>
          <ShowScroll dispatch={props.dispatch} media={props.media} />
          <h3 id='genre-title'>Trending</h3>
          {props.media.selectedList ? (
            <ShowList list={props.media.selectedList} />
          ) : (
            <ShowList list={props.media.trending} />
          )}
          <ShowScroll dispatch={props.dispatch} media={props.media} />
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