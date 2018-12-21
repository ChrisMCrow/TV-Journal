import React from 'react';
import PropTypes from 'prop-types';
import { ShowsGenre, ShowList, ShowsScroll, ShowSearch } from './../../components';

function ShowsPage(props) {

  function handleSelect(genreName) {
    document.getElementById('genre-title').innerHTML = genreName;
  }

  return (
    <main className='shows'>
      <div className='row'>
        <aside className='col-md-3'>
          <ShowSearch dispatch={props.dispatch} />
          <ShowsGenre genres={props.media.genres} dispatch={props.dispatch} onSelect={handleSelect} />
        </aside>
        <section className='col-md-9'>
          <ShowsScroll dispatch={props.dispatch} media={props.media} />
          <div className='card'>
            <div className='card-header shows-title' id='genre-title'>
              Trending
            </div>
            <div className='card-body'>
              {props.media.selectedList ? (
                <ShowList list={props.media.selectedList} />
              ) : (
                <ShowList list={props.media.trending} />
              )}
            </div>
            <ShowsScroll dispatch={props.dispatch} media={props.media} />
          </div>
        </section>
      </div>
    </main>
  );
}

ShowsPage.propTypes = {
  media: PropTypes.object,
  dispatch: PropTypes.func
}

export default ShowsPage;